import { useState, useEffect, useRef } from "react";
import "./App.css";
import Contollers from "./components/Contollers";
import Timer from "./components/Timer";

import { SessionType } from "./types/SessionType";
import SideBarTodo from "./components/SideBarTodo";
import { PagesContext, visiblePages } from "./context/PagesContext";

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
      let newSession: SessionType = sessionType == "work" ? "rest" : "work";

      setSessionType(newSession);
      setTimer(newSession === "work" ? 1500 : 300);
      setRunning(false);
    }

    return () => clearInterval(interval);
  }, [running, timer, sessionType]);

  console.log("renderizou: " + render.current++);

  return (
    <>
      <PagesContext.Provider value={visiblePages}>
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
            {visiblePages.sideBar.visible ? (
              <div className="side-todo">
                <SideBarTodo />
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </PagesContext.Provider>
    </>
  );
}

export default App;
