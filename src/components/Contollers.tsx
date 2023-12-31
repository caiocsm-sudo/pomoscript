import { Dispatch, SetStateAction, useContext } from "react";
import { SessionType } from "../types/SessionType";
import { Refresh } from "@mui/icons-material";
import { PagesContext } from "../context/PagesContext";

export default function Contollers({
  sessionType,
  setSessionType,
  setTimer,
  setRunning,
  setVisible,
}: {
  sessionType: SessionType;
  setSessionType: Dispatch<SetStateAction<SessionType>>;
  setTimer: Dispatch<SetStateAction<number>>;
  setRunning: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const pages = useContext(PagesContext);

  const handleSessionControllers = (pomo: SessionType) => {
    setSessionType(pomo);
    setTimer(pomo === "work" ? 1500 : 30);
    setRunning(false);
  };

  const handleReset = () => {
    setTimer(sessionType === "work" ? 1500 : 300);
    setRunning(false);
  };

  const handleTodoVisible = (): void => {
    const { sideBar } = pages;
    sideBar.visible = sideBar.visible == false ? true : false;
  };

  return (
    <>
      <section className="controllers">
        <button
          className={`default-btn menu-btn ${
            sessionType === "work" ? "active" : ""
          }`}
          onClick={() => handleSessionControllers("work")}
        >
          Pomodoro
        </button>
        <button
          className={`default-btn menu-btn ${
            sessionType === "rest" ? "active" : ""
          }`}
          onClick={() => handleSessionControllers("rest")}
        >
          Break
        </button>
        <button
          className="default-btn menu-btn flex-center"
          onClick={handleReset}
        >
          <Refresh />
        </button>
        <button className="default-btn menu-btn" onClick={handleTodoVisible}>
          Todo
        </button>
      </section>
    </>
  );
}
