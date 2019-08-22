import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css';
import Card from './Card';
import renderer from 'react-test-renderer';

  it('render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Card />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Card title = "banana" content = "whatever" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });
   
 