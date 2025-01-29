import styled from 'styled-components';

export const PostsContainer = styled.main`
  width: 90%;
  max-width: 864px;
  margin: 0 auto;
  margin-top: 3.6rem;
`;

export const SearchForm = styled.form``;

export const PubsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;

  strong {
    color: #c4d4e3;
  }

  span {
    color: #c4d4e3;
  }
`;

export const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  width: 100%;
  max-width: 864px;
  background: #040f1a;
  border: 1px solid #1c2f41;
  border-radius: 6px;
  color: #afc2d4;
  cursor: pointer;
`;

export const GridPosts = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, auto);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`;

export const PostBox = styled.div`
  max-width: 416px;
  min-width: 300px;
  width: 100%;
  max-height: 260px;
  height: 100vh;
  background-color: #112131;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border 0.5s;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:hover {
    border: 2px solid #3a536b;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    h1 {
      color: #e7edf4;
      font-size: 20px;
      font-weight: bold;
    }

    span {
      font-size: 14px;
      color: #7b96b2;
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #afc2d4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;
