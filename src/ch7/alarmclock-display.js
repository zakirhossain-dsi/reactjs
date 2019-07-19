import React from 'react'

export const AlarmClock = ({hours, minutes, seconds, ampm}) =>
    <div className='clock'>
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        <span>{ampm}</span>
    </div>