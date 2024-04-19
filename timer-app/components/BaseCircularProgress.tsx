import React from "react";
import {
    CircularProgress,
    CircularProgressLabel,
    CircularProgressLabelProps,
    CircularProgressProps,
} from "@chakra-ui/react";

interface Props extends CircularProgressProps {
    value: number;
    size?: string;
    thickness?: string;
    color?: string;
    labelProps?: CircularProgressLabelProps;
}

const BaseCircularProgress: React.FC<Props> = props => {
    const {
        value,
        size = "200px",
        thickness = "5px",
        color = "blue.400",
        children,
        labelProps,
        ...rest
    } = props;
    return (
        <CircularProgress
            value={value}
            size={size}
            thickness={thickness}
            color={color}
            {...rest}
        >
            <CircularProgressLabel {...labelProps}>{children}</CircularProgressLabel>
        </CircularProgress>
    );
};

export default BaseCircularProgress;
