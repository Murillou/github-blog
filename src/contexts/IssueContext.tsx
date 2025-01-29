import { createContext, ReactNode, useState } from 'react';

interface PostProps {
  number: number;
  title: string;
  body: string;
  updated_at: string;
}

interface IssueContextType {
  posts: PostProps[];
  setPosts: (posts: PostProps[]) => void;
}

export const IssueContext = createContext<IssueContextType>({
  posts: [],
  setPosts: () => {},
});

export function IssueProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<PostProps[]>([]);
  return (
    <IssueContext.Provider value={{ posts, setPosts }}>
      {children}
    </IssueContext.Provider>
  );
}
