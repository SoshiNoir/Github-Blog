import { FindPost } from './components/FindPost';
import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { PostsListContainer } from './styles';

export function Home() {
  return (
    <>
      <Profile />
      <FindPost />
      <PostsListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsListContainer>
    </>
  );
}
