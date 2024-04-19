import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import TimerDisplay from "./TimerDisplay";
import ControlPanel from "./ControlPanel";
import {
    breakTimeInMinutes,
    breakTimeInSeconds,
    workTimeInMinutes,
    workTimeInSeconds,
} from "../../constants/timer";

const PomodoroTimer: React.FC = () => {
    const [minutes, setMinutes] = useState<number>(workTimeInMinutes);
    const [seconds, setSeconds] = useState<number>(workTimeInSeconds);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isWorkMode, setIsWorkMode] = useState<boolean>(true);
    const [workCycles, setWorkCycles] = useState<number>(0);
    const [breakCycles, setBreakCycles] = useState<number>(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isRunning) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else if (seconds === 0) {
                    if (minutes === 0) {
                        // Timer finished, toggle mode and reset timer
                        if (isWorkMode) {
                            // Switch to break mode
                            setIsWorkMode(false);
                            setMinutes(breakTimeInMinutes); // Set break time
                            setSeconds(breakTimeInSeconds);
                            setBreakCycles(breakCycles + 1);
                        } else {
                            // Switch to work mode
                            setIsRunning(false);
                            setIsWorkMode(true);
                            setMinutes(workTimeInMinutes); // Set work time
                            setSeconds(workTimeInSeconds);
                            setWorkCycles(workCycles + 1);
                        }
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning, minutes, seconds, isWorkMode, workCycles, breakCycles]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setIsWorkMode(true);
        setMinutes(workTimeInMinutes);
        setSeconds(workTimeInSeconds);
    };

    const getProgress = (): number => {
        const currentTimeInSeconds = minutes * 60 + seconds;
        const totalTimeInSeconds = isWorkMode
            ? workTimeInMinutes * 60 + workTimeInSeconds
            : breakTimeInMinutes * 60 + breakTimeInSeconds;
        return (currentTimeInSeconds / totalTimeInSeconds) * 100;
    };

    const timer = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    const timerMode = isWorkMode ? "Work Time" : "Break Time";
    const toggleTimerActionText = isRunning ? "Pause" : "Start";
    const toggleTimerAction = isRunning ? pauseTimer : startTimer;

    return (
        <Box textAlign="center">
            <TimerDisplay
                timer={timer}
                timerMode={timerMode}
                workCycles={workCycles}
                breakCycles={breakCycles}
                getProgress={getProgress}
            />
            <ControlPanel
                toggleTimerActionText={toggleTimerActionText}
                toggleTimerAction={toggleTimerAction}
                resetTimer={resetTimer}
            />
        </Box>
    );
};

export default PomodoroTimer;
