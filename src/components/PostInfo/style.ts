import styled from 'styled-components';

export const PostInfoContainer = styled.div`
  background-color: #0b1b2b;
  padding: 2rem;
  width: 90%;
  max-width: 864px;
  color: #fff;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: -5rem;
  gap: 1.5rem;

  display: flex;
  flex-direction: column;
`;

export const LinksBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #3294f8;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s;
  }

  a:hover {
    border-bottom: 1px solid #3294f8;
  }
`;

export const TitleBox = styled.div`
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: -1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 2rem;
  }
`;
