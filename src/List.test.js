import React from 'react';
import ReactDOM from 'react-dom';
import './List.css';
import List from './List';
import renderer from 'react-test-renderer';

  it('render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<List cards = {[]}/>, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
        .create(<List header = "banana" cards = {[]} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });

  it('renders the UI as expected', () => {
    const tree = renderer
        .create(<List header = "banana" cards = {[ {id: 'a', title: 'First card', content: 'lorem ipsum'} ]} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });

 
