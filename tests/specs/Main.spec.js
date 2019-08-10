import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('<FullHeader />', () => {
    context('title', () => {
        it('should have header tag when mount', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('header')).to.have.length(1);
        });

        it('should have h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title="My Header" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should not have h1 tag when title not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });

        it('should have h1 equal title passed', () => {
            const wrapper = shallow(<FullHeader title="Header" />);
            expect(wrapper.find('h1').props().children).to.be.equal('Header');
        });
    });

    context('subtitle', () => {
        it('should have h2 tag when subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="My Header" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should not have h2 tag when subtitle not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });

        it('should have h1 equal subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="SubHeader" />);
            expect(wrapper.find('h2').props().children).to.be.equal('SubHeader');
        });
    });

    context('bgColor', () => {
        it('should have background-color equal #ccc when none is passed', () => {
            const wrapper = shallow(<FullHeader title="My Header" />);
            expect(wrapper).to.have.style('background-color').equal('#ccc');
        });

        it('should have background-color equal #fcf when bgColorn value is passed', () => {
            const wrapper = shallow(<FullHeader title="My Header" bgColor="#fcf" />);
            expect(wrapper).to.have.style('background-color').equal('#fcf');
        });
    });

    context('textColor', () => {
        it('should have color equal #fff when none is passed', () => {
            const wrapper = shallow(<FullHeader title="My Header" />);
            expect(wrapper).to.have.style('color').equal('#fff');
        });

        it('should have background-color equal #fcf when bgColorn value is passed', () => {
            const wrapper = shallow(<FullHeader title="My Header" textColor="#000" />);
            expect(wrapper).to.have.style('color').equal('#000');
        });
    });

    context('font', () => {
        it('should have font equal sans-serif when none is passed', () => {
            const wrapper = shallow(<FullHeader title="My Header" />);
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });

        it('should have font equal comic-sans when font value is passed', () => {
            const wrapper = shallow(<FullHeader title="My Header" font="open-sans" />);
            expect(wrapper).to.have.style('font-family').equal('open-sans');
        });
    });

    context('font', () => {
        it('should have background-image empty when none is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('background-image').equal('url()');
        });

        it('should have background-image equal bg.jpg when is passed', () => {
            const wrapper = shallow(<FullHeader bgImage="bg.jpg" />);
            expect(wrapper).to.have.style('background-image').equal('url(bg.jpg)');
        });
    });

    context('video', () => {
        it('should have video tag when video passed', () => {
            const wrapper = shallow(<FullHeader video="my_video.mp4" />);
            expect(wrapper.find('video')).to.have.length(1);
        });

        it('should not have video tag when is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('video')).to.have.length(0);
        });

        it('should have video equal subtitle passed', () => {
            const wrapper = shallow(<FullHeader video="my_video.mp4" />);
            expect(wrapper.find('video').props().src).to.be.equal('my_video.mp4');
        });
    });
});
