import C from '../../../src/ch8/constants';
import { color } from '../../../src/ch8/reducers';
import deepFreeze from 'deep-freeze';
import storeFactory from '../../../src/ch8/store-factory';
import {addColor} from '../../../src/ch8/actions';
import {shallow} from 'enzyme';
import Star from '../../../src/ch9/ui/star';


describe('Color Reducer', () => {
    it("test gloabl variable", () => {
        const wrapper = mount(<Star />);
        const p = wrapper.find('div.star');
        expect(p.length).toBe(1)
    }

});