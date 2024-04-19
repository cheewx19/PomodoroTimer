import React from "react";
import { Box } from "@chakra-ui/react";
import BaseButton from "../BaseButton";

interface ControlPanelProps {
    toggleTimerActionText: string;
    toggleTimerAction: () => void;
    resetTimer: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
    toggleTimerActionText,
    toggleTimerAction,
    resetTimer,
}) => {
    return (
        <Box>
            <BaseButton
                label={toggleTimerActionText}
                colorScheme="blue"
                onClick={toggleTimerAction}
                mr={4}
            />
            <BaseButton label="Reset" colorScheme="red" onClick={resetTimer} />
        </Box>
    );
};

export default ControlPanel;
