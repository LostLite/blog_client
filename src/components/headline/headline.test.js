import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
import {findByTestAttrib} from './../../../utils/index';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component
}

describe('Headline Tests', () => {

    describe('With props', ()=>{
        let component;
        beforeEach(()=>{
            component = setUp({header:"Headline Title", desc: "Headline Desc"});
        });

        it('Shows headline component', ()=>{
            const headline = findByTestAttrib(component, 'headlineComponent');
            expect(headline.length).toBe(1);
        });

        it('Shows headline title', ()=>{
            const headline = findByTestAttrib(component, 'headerNotice');
            expect(headline.length).toBe(1);
        });

        it('Shows headline description', ()=>{
            const headlineDesc = findByTestAttrib(component, 'headerDescription');
            expect(headlineDesc.length).toBe(1);
        });
    });

    describe('Without props', ()=>{
        let component;

        beforeEach(() => {
            component = setUp();
        })

        it('Return null component', ()=>{
            const headline = findByTestAttrib(component, 'headerNotice');
            expect(headline.length).toBe(0);
        });
    });

    
});