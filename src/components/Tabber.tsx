import styled from "@emotion/styled";
import Tab from "./Tab";

const Container = styled.div`
  max-width: 320px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Tabber = () => {
  return (
    <Container>
      <Tab color="#5fb5eedb" index={0} text="Pomodoro" />
      <Tab color="#45fe3b" index={1} text="Rest" />
    </Container>
  );
};

export default Tabber;
