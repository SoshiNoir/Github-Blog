import styled from 'styled-components';

export const PostHeaderContainer = styled.section`
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  background: ${(props) => props.theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 28.25rem) {
    ul {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      align-items: center;
    }
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: ${(props) => props.theme.textSizes.l};
    color: ${(props) => props.theme.colors['base-title']};
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    li {
      gap: 0.5rem;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors['base-span']};
      line-height: 0px;
    }

    svg {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`;
