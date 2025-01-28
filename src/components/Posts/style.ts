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
`;
