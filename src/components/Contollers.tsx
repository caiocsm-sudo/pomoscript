import { Dispatch, SetStateAction } from "react";
import { SessionType } from "../types/SessionType";
import { Refresh } from "@mui/icons-material";

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
  const handleSessionControllers = (pomo: SessionType) => {
    setSessionType(pomo);
    setTimer(pomo === "work" ? 1500 : 30);
    setRunning(false);
  };

  const handleReset = () => {
    setTimer(sessionType === "work" ? 1500 : 300);
    setRunning(false);
  };

  const handleTodoVisible = () => {
    setVisible((prev: boolean) => !prev);
  }

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
        <button className="default-btn menu-btn flex-center" onClick={handleReset}>
          <Refresh />
        </button>
        <button className="default-btn menu-btn" onClick={handleTodoVisible}>Todo</button>
      </section>
    </>
  );
}
