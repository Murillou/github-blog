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

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface PostProps {
  id: number;
  title: string;
  body: string;
  updated_at: string;
}

export function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { register, handleSubmit } = useForm();
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
  const navigate = useNavigate();

  async function handleIssueGitHub(searchQuery: string = 'is:issue') {
    const encodedSearchQuery = encodeURIComponent(
      `${searchQuery} repo:murillou/github-blog`
    );
    const url = `https://api.github.com/search/issues?q=${encodedSearchQuery}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      });
      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('GitHub Error:', errorDetails);
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

  function handleInputSearchValue(data: any) {
    const searchQuery = data.valueInput
      ? `is:issue ${data.valueInput}`
      : 'is:issue';
    handleIssueGitHub(searchQuery);
    console.log(searchQuery);
  }

  function handlePostClick(id: number) {
    // Navega para a página de detalhes do post com o id
    navigate(`/post/${id}`);
  }

  return (
    <PostsContainer>
      <PubsInfo>
        <strong>Publicações</strong>
        <span>{posts.length} publicações</span>
      </PubsInfo>
      <SearchForm onSubmit={handleSubmit(handleInputSearchValue)}>
        <SearchInput
          type="search"
          placeholder="Buscar conteúdo"
          {...register('valueInput')}
        />
      </SearchForm>

      <GridPosts>
        {posts.map(post => (
          <PostBox key={post.id} onClick={() => handlePostClick(post.id)}>
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
