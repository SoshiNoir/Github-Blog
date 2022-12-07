import styled from 'styled-components';

export const ExternalLinkContainer = styled.a`
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.blue};
  font-size: ${(props) => props.theme.textSizes.xs};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  transition: 0.4s;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 19px;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.blue};
  }
`;
