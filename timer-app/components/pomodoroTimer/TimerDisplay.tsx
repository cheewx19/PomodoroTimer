import React from "react";
import { Box, Text } from "@chakra-ui/react";
import BaseCircularProgress from "../BaseCircularProgress";

interface TimerDisplayProps {
    timer: string;
    timerMode: string;
    workCycles: number;
    breakCycles: number;
    getProgress: () => number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({
    timer,
    timerMode,
    workCycles,
    breakCycles,
    getProgress,
}) => {
    return (
        <Box textAlign="center">
            <BaseCircularProgress value={getProgress()}>
                <Text fontSize="3xl">{timer}</Text>
                <Text fontSize="xl">{timerMode}</Text>
            </BaseCircularProgress>
            <Box my={4}>
                <Text>Work Cycles: {workCycles}</Text>
                <Text>Break Cycles: {breakCycles}</Text>
            </Box>
        </Box>
    );
};

export default TimerDisplay;
