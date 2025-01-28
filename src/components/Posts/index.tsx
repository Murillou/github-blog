import { PostsContainer, PubsInfo, SearchForm, SearchInput } from './style';

export function Posts() {
  return (
    <PostsContainer>
      <PubsInfo>
        <strong>Publicações</strong>

        <span>6 publicações</span>
      </PubsInfo>
      <SearchForm>
        <SearchInput type="search" placeholder="Buscar conteúdo" />
      </SearchForm>
    </PostsContainer>
  );
}
