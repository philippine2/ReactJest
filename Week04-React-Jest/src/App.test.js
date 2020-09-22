import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from './ElfDebugEnzyme';
configure({adapter: new Adapter()});

const elfDebugEnzyme = new ElfDebugEnzyme(true, 'App.test.js');



describe('jest test', function() {

  it('renders without crashing', () => {

    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

  });


  it('renders and reads H1 text', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1 className="App-title">Welcome to React</h1>;
    elfDebugEnzyme.getFirst(wrapper, 'h1', true);
    expect(wrapper.contains(welcome)).toEqual(true);
    wrapper.find(welcome).first().debug();

  });



});


