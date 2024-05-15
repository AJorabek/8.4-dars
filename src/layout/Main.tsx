import styled from "@emotion/styled";
import Timer from "../components/Timer";
import ControlBtn from "./ControlBtn";
import Tabber from "../components/Tabber";

const StyledMain = styled.main`
  height: 100%;
  padding: 30px 0 0 0;
`;

const Main = () => {
  return (
    <StyledMain>
      <Tabber />
      <Timer />
      <ControlBtn />
    </StyledMain>
  );
};

export default Main;
