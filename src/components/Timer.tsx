import { useReducer, useRef } from "react";
import { convertMsToTime } from "./utils";

function Timer() {
    const counter = useRef(0);
    const timer = useRef<NodeJS.Timer | null>();
    const [, forceUpdate] = useReducer((x) => x + 1, 0);

    const handleStart = () => {
        const timerId = setInterval(function () {
            counter.current++;
            forceUpdate();
        }, 10);

        timer.current = timerId;
    };

    const handleStop = () => {
        if (timer.current) {
            clearInterval(timer.current);
        }
        forceUpdate();
    };

    const handleReset = () => {
        if (timer.current) {
            clearInterval(timer.current);
        }
        counter.current = 0;
        forceUpdate();
    };

    return (
        <div>
            {convertMsToTime(counter.current)}
            <div>
                <button onClick={() => handleStart()}>Start</button>
                <button onClick={() => handleStop()}>Stop</button>
                <button onClick={() => handleReset()}>Reset</button>
            </div>
        </div>
    );
}

export default Timer;
