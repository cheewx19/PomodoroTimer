import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
    label?: string;
    colorScheme?: string;
    onClick: () => void;
}

const BaseButton: React.FC<Props> = props => {
    const { label = "Button", colorScheme = "blue", onClick, ...rest } = props;
    return (
        <Button colorScheme={colorScheme} onClick={onClick} {...rest}>
            {label}
        </Button>
    );
};

export default BaseButton;
