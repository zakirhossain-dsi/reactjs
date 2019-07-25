import React from 'react';
import {AlarmClock} from './ch7/alarmclock-display';
import ReactDOM from 'react-dom';

const compose = (...fns) => (args) => fns.reduce((composed, f) => f(composed), args);
const clear = () => console.clear();
const getCurrentTime = () => new Date();
const log = (message) => console.log(message);
const oneSecond = () => 1000;
const serializeClockTime = date => ({hours: date.getHours(), minutes: date.getMinutes(), seconds: date.getSeconds()});
const convertToCivilianTime = clockTime => compose(appendAMPM, civilianHours)(clockTime);
const doubleDigits = civilianTime => compose(prependZero('hours'), prependZero('minutes'), prependZero('seconds'))(civilianTime);
const civilianHours = clockTime => ({...clockTime, hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours});
const appendAMPM = clockTime => ({...clockTime, ampm: clockTime.hours >= 12 ? 'PM' : 'AM'});
const display = target => time => target(time);
const formatClock = format => time => format.replace('hh', time.hours)
    .replace('mm', time.minutes)
    .replace('ss', time.seconds)
    .replace('tt', time.ampm);
const prependZero = key => clockTime => ({...clockTime, [key]: clockTime[key] < 10 ? `0${clockTime[key]}` : clockTime[key]});

const render = Component => civilianTime =>
{
    ReactDOM.render(<Component {...civilianTime} />, document.getElementById('root'))
};

export const startTicking = () => setInterval(compose(clear, getCurrentTime, serializeClockTime, convertToCivilianTime, doubleDigits, formatClock('hh:mm:ss tt'), display(log)), oneSecond());

export const DigitalTime = () => setInterval(compose(getCurrentTime, serializeClockTime, convertToCivilianTime, doubleDigits, render(AlarmClock)), oneSecond());
