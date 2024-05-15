import styled from "@emotion/styled";
import { useContext } from "react";
import timerData from "../context/timerData";

const StyledTimer = styled.div`
  max-width: 320px;
  max-height: 320px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 80px;
  border: 4px solid #5a8dda7e;
  border-radius: 9999px;
  background-color: #6ba6f32d;
  text-align: center;
  transition: 500ms all;
  cursor: pointer;
  &:hover {
    background-color: #6ba6f376;
  }
`;

const H1 = styled.h1`
  font-size: 80px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Level = styled.h3`
  font-size: 1.8rem;
`;

const Text = styled.h1`
  font-size: 2rem;
`;

const Timer = () => {
  const { status, times, curTab, seconds } = useContext(timerData);
  return (
    <StyledTimer>
      <H1>
        {status !== "stop" && +status.slice(status.length -1) === curTab
          ? seconds
          : times[curTab]}
      </H1>
      <Level>Level</Level>
      <Text>Poppular</Text>
    </StyledTimer>
  );
};

export default Timer;
