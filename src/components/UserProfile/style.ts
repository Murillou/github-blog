import styled from 'styled-components';

export const UserProfileContainer = styled.div`
  background-color: #0b1b2b;
  padding: 2rem;
  width: 90%;
  max-width: 864px;
  color: #fff;
  margin: 0 auto;
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

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 2rem;
    align-items: stretch;
  }
`;

export const UserInfos = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 480px) {
    justify-content: space-between;
  }
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    font-weight: bold;
    font-size: 20px;
  }

  a {
    display: flex;
    color: #3294f8;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;
  }

  @media (min-width: 480px) {
    justify-content: space-between;
    padding-top: 0.5rem;

    span {
      font-size: 24px;
    }
  }
`;

export const UserBio = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-size: 1rem;
    color: #afc2d4;
  }

  @media (min-width: 480px) {
    justify-content: flex-start;
  }

  @media (min-width: 540px) {
    margin-top: -3rem;
  }
`;

export const UserLoginAndFollowers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  @media (min-width: 480px) {
    justify-content: flex-start;
  }
`;
