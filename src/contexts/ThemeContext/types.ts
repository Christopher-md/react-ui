import Themes from "@/constants/themes";
import React from "react";

interface Props {
    theme?: Themes;
    children: React.ReactNode;
}

type Callback = () => void;

type IContext = Themes.light | Themes.dark;

export type {
    Props,
    Callback,
    IContext,
};
