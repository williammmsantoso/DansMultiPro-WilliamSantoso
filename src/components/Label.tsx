import React from "react";

interface LabelInterface {
    children: any
}

export const Label = ({ children }: LabelInterface) => {
    return <div className="label-wrapper">{children}</div>
}