import React, { useEffect, useState } from 'react';
import { Slider, Typography } from '@material-ui/core';

function valuetext(value) {
    return `${value}°C`;
}

function DraggableState({ onSliderChange }) {

    const handleSliderChange = (event, newValue) => {
        onSliderChange(newValue);
    }

    return (
        <div>
            <Typography>あなたの研究室が実際どの状況にあるか</Typography>
            <Slider
                track={false}
                aria-labelledby="track-false-slider"
                getAriaValueText={valuetext}
                defaultValue={30}
                marks={0}
                onChange={handleSliderChange}
            />
        </div>
    )
}

export default DraggableState;

