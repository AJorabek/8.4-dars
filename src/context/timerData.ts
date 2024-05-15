import { SetStateAction, createContext } from "react";

export default createContext({
  status: "stopping",
  setStatus: (_: SetStateAction<string>) => {},
  howMuch: [0, 0],
  setHowMuch: (_: SetStateAction<number[]>): void => {},
  curTab: 0,
  setCurTab: (_: number): void => {},
  times: ["20:00", "05:00"],
  setTimes: (_: string[]): void => {},
  seconds: "20:00",
  setSeconds: (_: SetStateAction<string>): void => {},
});
