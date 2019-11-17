import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Display } from './Display';

describe('Display', () => {
    const update = jest.fn();
    const setInput = jest.fn();
    const end = jest.fn();
    const props = {
        board: [[0,0,0],[0,0,0,]],
        height: 800,
        step: 20,
        lost: false,
        refreshRate: 1000/30,
        update,
        setInput,
        end
    }
    jest.useFakeTimers();
    const display = shallow(<Display {...props}/>);
    it('renders properly', () => {
        expect(toJson(display)).toMatchSnapshot();
    });
    it('sets input', () => {
        display.instance().keydownHandler({ keyCode: 39 });
        expect(setInput).toHaveBeenCalled();
    });
    it('dispatches `update` from props', () => {
        jest.advanceTimersByTime(1000);
        expect(update).toHaveBeenCalled();
    });
    it('dispatches `end` when `lost` is true', () => {
        display.setProps({lost: true});
        jest.advanceTimersByTime(1000);
        expect(end).toHaveBeenCalled();
    });
    it('clears interval when it unmounts', () => {
        const interval = display.instance().interval;
        display.unmount();
        expect(clearInterval).toHaveBeenCalledWith(interval);
    });
});