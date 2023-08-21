import React from "react";

interface ChipPropsInterface {
    title: string
}

export const Chip = ({ title }: ChipPropsInterface) => {
    return <div className={`chip-container ${title === 'Full Time' && 'green'} ${title === 'Part Time' && 'yellow'} ${title === 'Freelance' && 'red'}`}>
        {title}
    </div>
}