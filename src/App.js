import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faAnglesUp,
  faAnglesDown,
  faCirclePlay,
  faCirclePause,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

const DEFAULT_SESSION_DURATION = 25 * 60;
const DEFAULT_BREAK_DURATION = 5 * 60;
const SESSION = "SESSION";
const BREAK = "BREAK";
const DEFAULT_RUNNING_TIMER = {
  type: SESSION,
  timeLeft: DEFAULT_SESSION_DURATION,
};
const DEFAULT_SESSION_CHANGE = false;

const audioBeep = document.createElement("audio");
audioBeep.src =
  "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";
audioBeep.setAttribute("id", "beep");
audioBeep.setAttribute("preload", "auto");
document.body.appendChild(audioBeep);

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSessionChanged, setSessionChange] = useState(DEFAULT_SESSION_CHANGE);
  const [sessionDuration, setSessionDuration] = useState(
    DEFAULT_SESSION_DURATION
  );
  const [breakDuration, setBreakDuration] = useState(DEFAULT_BREAK_DURATION);
  const [runningTimer, setRunningTimer] = useState(DEFAULT_RUNNING_TIMER);

  //handle change time
  function validTimeChange(currentTime, changeDuration) {
    return currentTime + changeDuration > 0 &&
      currentTime + changeDuration <= 3600 &&
      !isPlaying
      ? currentTime + changeDuration
      : currentTime;
  }

  function formatTimeToMinute(timeInSecond) {
    const minute = Math.floor(timeInSecond / 60);
    const second = timeInSecond - minute * 60;

    function handlePrependZero(number) {
      return number >= 10 ? number : number > 0 ? `0${number}` : `00`;
    }

    return {
      minute: handlePrependZero(minute),
      second: handlePrependZero(second),
    };
  }

  function handleIncrement(timerType) {
    !isPlaying &&
      timerType == SESSION &&
      setSessionDuration((cur) => validTimeChange(cur, 60));
    !isPlaying &&
      timerType == BREAK &&
      setBreakDuration((cur) => validTimeChange(cur, 60));
  }

  function handleDecrement(timerType) {
    !isPlaying &&
      timerType == SESSION &&
      setSessionDuration((cur) => validTimeChange(cur, -60));
    !isPlaying &&
      timerType == BREAK &&
      setBreakDuration((cur) => validTimeChange(cur, -60));
  }

  function handlePlay() {
    setIsPlaying((cur) => !cur);
  }

  function handleReset() {
    setIsPlaying(false);
    setSessionDuration(DEFAULT_SESSION_DURATION);
    setBreakDuration(DEFAULT_BREAK_DURATION);
    setRunningTimer(DEFAULT_RUNNING_TIMER);
    audioBeep.pause();
    audioBeep.currentTime = 0;
  }

  //handle display timer while setting
  useEffect(() => {
    if (!isPlaying) {
      setRunningTimer((cur) => ({
        ...cur,
        timeLeft: cur.type == SESSION ? sessionDuration : breakDuration,
      }));
    }
  }, [sessionDuration, breakDuration]);

  //handle running time
  useEffect(() => {
    const counter = {};
    if (isPlaying) {
      counter.countDown = setTimeout(() => {
        setRunningTimer((cur) => {
          return { ...cur, timeLeft: cur.timeLeft - 1 };
        });
      }, 1000);
    }
    return () => {
      if (runningTimer.timeLeft == 0 && isPlaying) {
        setRunningTimer((cur) => {
          return {
            type: cur.type == SESSION ? BREAK : SESSION,
            timeLeft: cur.type == SESSION ? breakDuration : sessionDuration,
          };
        });
        audioBeep.currentTime = 0;
        audioBeep.play();
        counter.countDown && clearTimeout(counter.countDown);
      }
      counter.countDown && clearTimeout(counter.countDown);
    };
  }, [isPlaying, runningTimer]);

  return (
    <div className="App container">
      <div className="App_wrapper container">
        <div id="session-timer" className="timer container">
          <h2 className="timer__label" id="session-label">
            Session duration
          </h2>
          <div className="timer__setting_wrapper container ">
            <div
              className={`timer__increment icon button ${
                isPlaying && "timer__setting-blocked"
              }`}
              id="session-increment"
              onClick={() => handleIncrement(SESSION)}
            >
              <FontAwesomeIcon icon={faAnglesUp} />
            </div>
            <h3 className="timer__length" id="session-length">
              {sessionDuration / 60}
            </h3>
            <div
              className={`timer__decrement icon button ${
                isPlaying && "timer__setting-blocked"
              }`}
              id="session-decrement"
              onClick={() => handleDecrement(SESSION)}
            >
              <FontAwesomeIcon icon={faAnglesDown} />
            </div>
          </div>
        </div>
        <div id="break-timer" className="timer container">
          <h2 className="timer__label" id="break-label">
            Break duration
          </h2>
          <div className="timer__setting_wrapper container ">
            <div
              className={`timer__increment button icon ${
                isPlaying && "timer__setting-blocked"
              }`}
              id="break-increment"
              onClick={() => handleIncrement(BREAK)}
            >
              <FontAwesomeIcon icon={faAnglesUp} />
            </div>
            <h3 className="timer__length" id="break-length">
              {breakDuration / 60}
            </h3>
            <div
              className={`timer__decrement button icon ${
                isPlaying && "timer__setting-blocked"
              }`}
              id="break-decrement"
              onClick={() => handleDecrement(BREAK)}
            >
              <FontAwesomeIcon icon={faAnglesDown} />
            </div>
          </div>
        </div>
        <div id="current-timer" className="timer container">
          <h2 className={`timer__label`} id="timer-label">
            {runningTimer.type}
          </h2>
          <h3 className={`timer__length `} id="time-left">
            {formatTimeToMinute(runningTimer.timeLeft).minute}:
            {formatTimeToMinute(runningTimer.timeLeft).second}
          </h3>
          <div className="container container_h timer__controler">
            <div id="start_stop" className="icon button" onClick={handlePlay}>
              {isPlaying ? (
                <FontAwesomeIcon icon={faCirclePause} />
              ) : (
                <FontAwesomeIcon icon={faCirclePlay} />
              )}
            </div>
            <div id="reset" className="icon button" onClick={handleReset}>
              <FontAwesomeIcon icon={faRotateRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
