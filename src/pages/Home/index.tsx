import { useCallback, useEffect, useState } from 'react';
import { Loading } from '../../components/Loading/Loading';
import { api } from '../../lib/axios';
import { FindPost } from './components/FindPost';
import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { PostsListContainer } from './styles';

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Home() {
  //@ts-ignore
  const username = import.meta.env.VITE_GITHUB_USERNAME;
  //@ts-ignore
  const repoName = import.meta.env.VITE_GITHUB_REPONAME;

  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );
        setPosts(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Profile />
      <FindPost postsLenght={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Loading />
      ) : (
        <PostsListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}
    </>
  );
}
