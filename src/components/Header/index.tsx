import { HeaderContainer, LogoContainer } from './style';

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img
          src="../../../public/assets/logo-github.png"
          alt="Logo Github Blog"
        />
      </LogoContainer>
    </HeaderContainer>
  );
}
