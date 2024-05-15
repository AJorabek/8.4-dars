import styled from "@emotion/styled";

const StyledHeader = styled.header`
  width: 100%;
  padding: 15px 20px;
`;

const StyledLogo = styled.a`
  font-size: 2rem;
  font-weight: 700;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>Pomodoro Timer</StyledLogo>
    </StyledHeader>
  );
};

export default Header;
