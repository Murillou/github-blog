import { useEffect, useState } from 'react';
import { PostsContainer, PubsInfo, SearchForm, SearchInput } from './style';

interface PostProps {
  id: number;
  title: string;
  body: string;
}

export function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

  async function handleIssueGitHub() {
    const url =
      'https://api.github.com/search/issues?q=is:issue+repo:murillou/github-blog';

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }
      const json = await response.json();
      setPosts(json.items);
      console.log(json.items);
    } catch (error: unknown) {
      console.log((error as Error).message);
    }
  }

  useEffect(() => {
    handleIssueGitHub();
  }, []);

  return (
    <PostsContainer>
      <PubsInfo>
        <strong>Publicações</strong>
        <span>{posts.length} publicações</span>
      </PubsInfo>
      <SearchForm>
        <SearchInput type="search" placeholder="Buscar conteúdo" />
      </SearchForm>

      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </PostsContainer>
  );
}
