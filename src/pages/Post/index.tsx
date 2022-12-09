import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { IPost } from '../Home';
import { PostContent } from './components/PostContent';
import { PostHeader } from './components/PostHeader';

//@ts-ignore
const username = import.meta.env.VITE_GITHUB_USERNAME;
//@ts-ignore
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      );

      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [postData]);

  useEffect(() => {
    getPostDetails();
  }, []);
  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  );
}
