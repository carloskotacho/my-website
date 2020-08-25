import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <S.ProfileAuthor>{title}</S.ProfileAuthor>
      </S.ProfileLink>
    </S.ProfileWrapper>
  );
};

export default Profile;
