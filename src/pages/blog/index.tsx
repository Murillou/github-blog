import { Header } from '../../components/Header';
import { Posts } from '../../components/Posts';
import { UserProfile } from '../../components/UserProfile';

export function BlogMain() {
  return (
    <div>
      <Header />
      <UserProfile />
      <Posts />
    </div>
  );
}
