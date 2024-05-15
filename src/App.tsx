import { useState } from "react";
import TimerData from "./context/timerData";
import Header from "./layout/Header";
import Main from "./layout/Main";
import GlobalStyles from "./utils/GlobalStyles";

const App = () => {
  const [howMuch, setHowMuch] = useState([0, 0]);
  const [curTab, setCurTab] = useState(0);
  const [status, setStatus] = useState<string>("stop");
  const [times, setTimes] = useState(["00:20", "00:10"]);
  const [seconds, setSeconds] = useState(times[curTab]);

  const value = {
    howMuch,
    setHowMuch,
    curTab,
    setCurTab,
    status,
    setStatus,
    times,
    setTimes,
    seconds,
    setSeconds,
  };
  return (
    <TimerData.Provider value={value}>
      <GlobalStyles />
      <Header />
      <Main />
    </TimerData.Provider>
  );
};

export default App;
