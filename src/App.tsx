import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './style/GlobalStyle';
import { Router } from './Router';

export function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </>
  );
}
