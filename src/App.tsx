import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './style/GlobalStyle';
import { Router } from './Router';
import { IssueProvider } from './contexts/IssueContext';

export function App() {
  return (
    <IssueProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </IssueProvider>
  );
}
