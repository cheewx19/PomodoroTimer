import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    CircularProgress,
    CircularProgressLabel,
    Text,
} from "@chakra-ui/react";

const PomodoroTimer: React.FC = () => {
    const workTimeInMinutes = 1;
    const workTimeInSeconds = 0;
    const breakTimeInMinutes = 0;
    const breakTimeInSeconds = 30;
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
        setSeconds(0);
    };

    const getProgress = (): number => {
        const currentTimeInSeconds = minutes * 60 + seconds;
        const totalMinutes = isWorkMode
            ? workTimeInMinutes
            : breakTimeInMinutes;
        const totalSeconds = isWorkMode
            ? workTimeInSeconds
            : breakTimeInSeconds;
        const totalTimeInSeconds = totalMinutes * 60 + totalSeconds;
        return (currentTimeInSeconds / totalTimeInSeconds) * 100;
    };

    // set all tenary logic for UI
    const timer = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    const timerMode = isWorkMode ? "Work Time" : "Break Time";
    const toggleTimerActionText = isRunning ? "Pause" : "Start";
    const toggleTimerAction = isRunning ? pauseTimer : startTimer;

    return (
        <Box textAlign="center">
            <CircularProgress
                value={getProgress()}
                size="200px"
                thickness="5px"
                color="blue.400"
            >
                <CircularProgressLabel>
                    <Text fontSize="3xl">{timer}</Text>
                    <Text fontSize="xl">{timerMode}</Text>
                </CircularProgressLabel>
            </CircularProgress>
            <Box>
                <Button colorScheme="blue" onClick={toggleTimerAction} mr={4}>
                    {toggleTimerActionText}
                </Button>
                <Button colorScheme="red" onClick={resetTimer}>
                    Reset
                </Button>
                <Box mt={4}>
                    <Text>Work Cycles: {workCycles}</Text>
                    <Text>Break Cycles: {breakCycles}</Text>
                </Box>
            </Box>
        </Box>
    );
};

export default PomodoroTimer;
