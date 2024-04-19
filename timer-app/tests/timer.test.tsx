// Timer.test.tsx
import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import PomodoroTimer from "../components/pomodoroTimer/PomodoroTimer";

describe("Timer component", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    afterEach(() => {
        jest.useRealTimers();
    });
    test("Renders timer with initial time", () => {
        const { getByText } = render(<PomodoroTimer />);
        expect(getByText("25:00")).toBeInTheDocument();
    });
    test("Starts and stops timer correctly", () => {
        const { getByText } = render(<PomodoroTimer />);

        // Click Start button
        fireEvent.click(getByText("Start"));
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(getByText("24:59")).toBeInTheDocument(); // Timer should start counting down

        // Click Pause button
        fireEvent.click(getByText("Pause"));
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(getByText("24:59")).toBeInTheDocument(); // Timer should pause and not update

        // Click Start button again
        fireEvent.click(getByText("Start"));
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(getByText("24:58")).toBeInTheDocument(); // Timer should resume counting down
    });
    test("Resets timer correctly", () => {
        const { getByText } = render(<PomodoroTimer />);

        // Click Start button
        fireEvent.click(getByText("Start"));
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        // Click Reset button
        fireEvent.click(getByText("Reset"));
        expect(getByText("25:00")).toBeInTheDocument(); // Timer should reset to initial time
    });
});
