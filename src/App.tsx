import { useState, useEffect, useRef } from "react";
import "./App.css";
import Contollers from "./components/Contollers";
import Timer from "./components/Timer";

import { SessionType } from "./types/SessionType";
import SideBarTodo from "./components/SideBarTodo";

function App() {
  const [sessionType, setSessionType] = useState<SessionType>("work");
  const [timer, setTimer] = useState<number>(1500);
  const [running, setRunning] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const render = useRef<number>(0);

  useEffect(() => {
    let interval: number;
    if (running && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime: number) => prevTime - 1);
      }, 1000);
    } else if (timer === 0) {
      setSessionType(sessionType == "work" ? "rest" : "work");
      setTimer(sessionType === "rest" ? 300 : 1500);
    }

    return () => clearInterval(interval);
  }, [running, timer, sessionType]);

  console.log("renderizou: " + render.current++);

  return (
    <>
      <section className={`app`}>
        <div className="wrapper">
          <div className="pomodoro">
            <Contollers
              sessionType={sessionType}
              setTimer={setTimer}
              setSessionType={setSessionType}
              setRunning={setRunning}
              setVisible={setVisible}
            />
            <Timer timer={timer} setRunning={setRunning} running={running} />
          </div>
          {visible ? (
            <div className="side-todo">
              <SideBarTodo />
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}

export default App;
