import styled from 'styled-components';
import { Link } from 'gatsby';

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 1rem; /** C D B E */
`;
