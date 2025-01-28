import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-image: url('../../../public/assets/header-bg.png');
  background-size: cover;
  width: 100%;
  height: 27vh;
  padding: 1.5rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 148px;
    height: 98px;
  }
`;
