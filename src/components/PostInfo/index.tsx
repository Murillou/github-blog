import {
  CaretLeft,
  Link,
  GithubLogo,
  CalendarPlus,
  ChatCircle,
} from 'phosphor-react';
import {
  BodyInfoContainer,
  InfoBox,
  LinksBox,
  PostInfoContainer,
  TitleBox,
} from './style';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { relativeTime } from '../../utils/formatter';

interface IssuesProps {
  title: string;
  updated_at: string;
  comments: number;
  body: string;
  user: { login: string };
}

export function PostInfo() {
  const { id } = useParams<{ id: string }>();
  const [issue, setIssue] = useState<IssuesProps>();
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
          setIssue(data);
        } catch (error) {
          console.error('Erro:', error);
        }
      }
    }
    fetchPostDetails();
  }, [id]);

  return (
    <>
      {' '}
      <PostInfoContainer>
        <LinksBox>
          <NavLink to="/">
            <CaretLeft size={15} /> VOLTAR
          </NavLink>

          <a href="http://github.com/murillou" target="_blank">
            VER NO GITHUB <Link size={15} />
          </a>
        </LinksBox>
        <TitleBox>
          <h1>{issue ? issue.title : 'Carregando...'}</h1>
        </TitleBox>
        <InfoBox>
          <span>
            <GithubLogo size={17} />
            {issue ? issue.user.login : 'Carregando...'}
          </span>
          <span>
            <CalendarPlus size={17} />

            {relativeTime(issue?.updated_at || '')}
          </span>
          <span>
            <ChatCircle size={17} />

            {issue ? `${issue.comments} comentários` : 'Carregando...'}
          </span>
        </InfoBox>
      </PostInfoContainer>
      <BodyInfoContainer>
        {issue ? issue.body : 'Carregando...'}
      </BodyInfoContainer>
    </>
  );
}
