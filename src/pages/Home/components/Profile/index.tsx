import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { profile } from 'console';
import { useCallback, useEffect, useState } from 'react';
import { ExternalLink } from '../../../../components/ExternalLink';
import { Loading } from '../../../../components/Loading/Loading';
import { api } from '../../../../lib/axios';
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles';

//@ts-ignore
const username = import.meta.env.VITE_GITHUB_USERNAME;
//@ts-ignore
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/${username}`);

      setProfileData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ProfileContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ProfilePicture src={profileData.avatar_url} />

          <ProfileDetails>
            <header>
              <h1>{profileData.name}</h1>
              <ExternalLink
                text='github'
                href={profileData.html_url}
                target='_blank'
              />
            </header>
            <p>{profileData.bio}</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>
              {profileData?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {profileData.company}
                </li>
              )}
              <li>
                {' '}
                <FontAwesomeIcon icon={faUserGroup} />
                {profileData.followers}
              </li>
            </ul>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  );
}
