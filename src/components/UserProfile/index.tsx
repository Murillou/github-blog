import { useEffect, useState } from 'react';
import {
  UserBio,
  UserInfos,
  UserLoginAndFollowers,
  UserName,
  UserProfileContainer,
} from './style';
import { GithubLogo, Link } from 'phosphor-react';

interface UserProps {
  userAvatar: string;
  userName: string;
  userBio: string;
  userLogin: string;
  userFollower: number;
}

export function UserProfile() {
  const [user, setUser] = useState<UserProps>({
    userAvatar: '',
    userName: '',
    userBio: '',
    userLogin: '',
    userFollower: 0,
  });

  async function handleUserProfile() {
    const url = 'https://api.github.com/users/murillou';

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Reponse status:${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      setUser(prevState => ({
        ...prevState,
        userAvatar: json.avatar_url,
        userName: json.name,
        userBio: json.bio,
        userLogin: json.login,
        userFollower: json.followers,
      }));
    } catch (error: unknown) {
      console.log((error as Error).message);
    }
  }

  useEffect(() => {
    handleUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <UserProfileContainer>
      <img src={user.userAvatar} />

      <UserInfos>
        <UserName>
          <span>{user.userName}</span>
          <a href="http://github.com/murillou" target="_blank">
            GITHUB <Link size={15} />
          </a>
        </UserName>

        <UserBio>
          <span>{user.userBio}</span>
        </UserBio>

        <UserLoginAndFollowers>
          <span>
            <GithubLogo size={17} />
            {user.userLogin}
          </span>

          <span>{user.userFollower} seguidores</span>
        </UserLoginAndFollowers>
      </UserInfos>
    </UserProfileContainer>
  );
}
