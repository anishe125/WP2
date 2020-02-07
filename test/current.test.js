import React from 'react';
import {MyCity} from '../src/components/MyCity';
import {shallow} from 'enzyme'
import {shallowToJson} from "enzyme-to-json";

it('renders correctly', () => {
    const tree = shallow(<MyCity/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});