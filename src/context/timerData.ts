import { SetStateAction, createContext } from "react";

export default createContext({
  status: "stopping",
  setStatus: (_: SetStateAction<string>) => {},
  howMuch: [0, 0],
  setHowMuch: (_: SetStateAction<number[]>): void => {},
  curTab: 0,
  setCurTab: (_: number): void => {},
  times: ["00:20", "00:10"],
  setTimes: (_: string[]): void => {},
  seconds: "20:00",
  setSeconds: (_: SetStateAction<string>): void => {},
});
