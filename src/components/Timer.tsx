import { Dispatch, SetStateAction } from "react";

export default function Timer({
  timer,
  running,
  setRunning,
}: {
  timer: number;
  setRunning: Dispatch<SetStateAction<boolean>>;
  running: boolean;
}) {
  let minutes = Number(Math.floor(timer / 60).toFixed(0));
  let seconds = Number(timer % 60)
    .toString()
    .padStart(2, "0");

  const fullTimer: string = `${minutes}:${seconds}`;

  document.title = running ? `${fullTimer} Pomoscript` : "Pomoscript";

  const handlePauseAndResume = () => {
    setRunning(!running);
  };

  return (
    <>
      <div className="timer">{fullTimer}</div>
      <div style={{ margin: "0 0 1rem" }}>
        <button className="default-btn special-btn" onClick={handlePauseAndResume}>
          {running ? "Pause" : "Start"}
        </button>
      </div>
    </>
  );
}
