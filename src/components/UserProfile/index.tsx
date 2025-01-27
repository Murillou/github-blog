import { useEffect, useState } from 'react';
import { UserProfileContainer } from './style';

interface UserProps {
  userAvatar: string;
  userName: string;
  userBio: string;
  userFollower: number;
}

export function UserProfile() {
  const [user, setUser] = useState<UserProps>({
    userAvatar: '',
    userName: '',
    userBio: '',
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
        userName: json.login,
        userBio: json.bio,
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
      <div>
        <img src={user.userAvatar} />
      </div>

      <div>
        <h1>{user.userName}</h1>
        {user.userBio}
        {user.userFollower}
      </div>
    </UserProfileContainer>
  );
}
