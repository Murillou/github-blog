import { useEffect, useState } from 'react';
import {
  GridPosts,
  PostBox,
  PostsContainer,
  PubsInfo,
  SearchForm,
  SearchInput,
} from './style';

import { relativeTime } from '../../utils/formatter';
interface PostProps {
  id: number;
  title: string;
  body: string;
  updated_at: string;
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

      <GridPosts>
        {posts.map(post => (
          <PostBox key={post.id}>
            <div>
              <h1>{post.title}</h1>
              <span>{relativeTime(post.updated_at)}</span>
            </div>
            <p>{post.body}</p>
          </PostBox>
        ))}
      </GridPosts>
    </PostsContainer>
  );
}
