import React from 'react';
import ReactDOM from 'react-dom';
import Planos from './Planos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Planos />, div);
  ReactDOM.unmountComponentAtNode(div);
});
