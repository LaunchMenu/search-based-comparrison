import React, {FC} from "react";
import {jsx} from "@emotion/react";
import {keyframes} from "@emotion/react";

const spinnerKeyframes = keyframes({
    "0%": {transform: "rotate(0deg)"},
    "100%": {transform: "rotate(360deg)"},
});

/** A standard spinner element for loading */
export const Spinner: FC<{size?: number}> = ({size = 25}) => (
    <div
        css={() => ({
            border: `${Math.floor(size / 5)}px solid blue`,
            borderTop: `${Math.floor(size / 5)}px solid white`,
            borderRadius: "50%",
            width: size,
            height: size,
            animation: `${spinnerKeyframes} 2s linear infinite`,
        })}
    />
);
