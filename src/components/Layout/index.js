import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Profile from '../Profile';

import GlobalStyles from '../../styles/global';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
