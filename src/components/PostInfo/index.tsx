import { CaretLeft, Link } from 'phosphor-react';
import { InfoBox, LinksBox, PostInfoContainer, TitleBox } from './style';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function PostInfo() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(null);
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    async function fetchPostDetails() {
      if (id) {
        const url = `https://api.github.com/repos/murillou/github-blog/issues/${id}`;
        try {
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${githubToken}`,
            },
          });
          console.log('Response:', response);

          if (!response.ok) {
            throw new Error('Erro ao carregar os detalhes da issue');
          }
          const data = await response.json();
          console.log('Post data:', data);
          setPost(data);
        } catch (error) {
          console.error('Erro:', error);
        }
      }
    }
    fetchPostDetails();
  }, [id]);

  return (
    <PostInfoContainer>
      <LinksBox>
        <a href="">
          <CaretLeft size={15} /> VOLTAR
        </a>

        <a href="http://github.com/murillou" target="_blank">
          VER NO GITHUB <Link size={15} />
        </a>
      </LinksBox>
      <TitleBox>
        <h1>Teste</h1>
      </TitleBox>
      <InfoBox>
        <span>Murillou</span>
        <span>Hoje</span>
        <span>5 comentários</span>
      </InfoBox>
    </PostInfoContainer>
  );
}
