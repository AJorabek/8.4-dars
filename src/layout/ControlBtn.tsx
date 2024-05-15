import styled from "@emotion/styled";
import { useContext } from "react";
import timerData from "../context/timerData";

interface IBtn {
  stop: string;
}

const Btn = styled.button<IBtn>`
  max-width: 290px;
  width: 100%;
  padding: 12px 0px;
  border-radius: 9999px;
  border: 2px solid #2d6ded;
  margin: 20px auto;
  display: block;
  font-size: 1.9rem;
  cursor: pointer;
  transition: 500ms all;
  &:active {
    transform: scale(90%);
  }
  font-weight: 700;
  background-color: ${(p) => (p.stop === "true" ? "#2d6ded" : "white")};
  color: ${(p) => (p.stop === "true" ? "#ffffff" : "#2d6ded")};
`;

const ControlBtn = () => {
  const { status, setStatus, curTab } = useContext(timerData);
  const handleClick = () => {
    const running = status === "stop";
    if (!running) {
      setStatus("stop");
    }

    if (running) setStatus("running" + curTab);
  };
  return (
    <Btn onClick={handleClick} stop={status !== "stop" ? "false" : "true"}>
      {status !== "stop" ? "Stop" : "Start"}
    </Btn>
  );
};

export default ControlBtn;
