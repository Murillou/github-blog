import styled from 'styled-components';

export const UserProfileContainer = styled.div`
  background-color: #0b1b2b;
  margin: 0 auto;
  padding: 2rem;
  width: 90%;
  max-width: 864px;
  color: #fff;
  border-radius: 10px;
  margin-top: -5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    border-radius: 8px;
    width: 140px;
    height: 148px;
  }
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 22px;
  }
`;

export const UserBio = styled.div`
  span {
    font-size: 1rem;
    color: #afc2d4;
  }
`;

export const UserLoginAndFollowers = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    align-items: center;
  }
`;
