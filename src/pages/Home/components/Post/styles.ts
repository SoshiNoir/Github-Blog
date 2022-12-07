import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  background: ${(props) => props.theme.colors['base-post']};
  border: 2px solid ${(props) => props.theme.colors['base-post']};
  padding: 2rem;
  transition: 0.4s;

  &:hover {
    border-color: ${(props) => props.theme.colors['base-label']};
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;
