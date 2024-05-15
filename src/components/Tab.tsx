import styled from "@emotion/styled";
import { useContext, useEffect, useRef, useState } from "react";
import timerData from "../context/timerData";
import { css } from "@emotion/react";
interface IBtn {
  active: "true" | "false";
  color: string;
}

const Container = styled.button<IBtn>`
  width: 100%;
  padding: 12px 0;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: none;
  font-size: 1.6rem;
  background-color: white;
  color: ${({ color }) => color};
  &:hover {
    background-color: #0067f63b;
  }
  font-weight: 700;
  &:disabled {
    background-color: #ffffff96;
  }
  ${({ active }) =>
    active === "true"
      ? css`
          background-color: #0067f63b;
        `
      : ""}
`;

const Tab = ({
  index,
  text,
  color,
}: {
  index: number;
  text: string;
  color: string;
}) => {
  const timerRef = useRef<any>(0);
  const {
    curTab,
    setStatus,
    seconds,
    setSeconds,
    howMuch,
    setCurTab,
    status,
    times,
    setHowMuch,
  } = useContext(timerData);
  useEffect(() => {
    if (status === "stop") clearInterval(timerRef.current);
    if (status === "stop") setSeconds(times[curTab]);
    if (status !== "stop")
      timerRef.current = setInterval(() => {
        changeTimer();
      }, 1000);
  }, [status]);
  useEffect(() => {
    const over = seconds === "";
    if (over) setStatus("stop");
    if (over) clearInterval(timerRef.current);
    if (over)
      setHowMuch((prev) => {
        if (curTab === 0) return [prev[0] + 1, prev[1]];
        if (curTab === 1) return [prev[0], prev[1] + 1];
        return prev;
      });
  }, [seconds]);

  const changeTimer = () => {
    setSeconds((prev) => {
      const minutes = prev.slice(0, 2);
      const second = prev.slice(3);
      let time = "";
      if (+second - 1 !== 0) {
        time =
          minutes + ":" + (+second - 1 > 9 ? +second - 1 : "0" + (+second - 1));
      }
      if (+second === 0) {
        time = (+minutes - 1 > 9 ? +minutes - 1 : "0" + (+minutes - 1)) + ":59";
      }
      return time;
    });
  };

  return (
    <Container
      onClick={() => {
        setCurTab(index);
        setSeconds(times[index]);
      }}
      disabled={+status.slice(status.length - 1) !== index && status !== "stop"}
      color={color}
      active={curTab === index ? "true" : "false"}
    >
      {text} <span>{howMuch[index]}</span>
    </Container>
  );
};

export default Tab;
