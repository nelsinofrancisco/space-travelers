import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ReservedMissionsList from './ReservedMissionsList';
import store from '../../redux/configureStore';

const createComponent = create(
  <Provider store={store}>
    <ReservedMissionsList />
  </Provider>,
);

const renderComponent = () => {
  render(
    <Provider store={store}>
      <ReservedMissionsList />
    </Provider>,
  );
};

describe('Testing ReservedMissionsList component', () => {
  test('first type for ReservedMissionsList is a p HTML tag', () => {
    const component = createComponent.toJSON();
    expect(component[0].type).toEqual('p');
  });

  test('second type for ReservedMissionsList is a table HTML tag', () => {
    const component = createComponent.toJSON();
    expect(component[1].type).toEqual('table');
  });

  test('className props are present in ReservedMissionsList component', () => {
    const component = createComponent.toJSON();
    expect(component[1].props.className).toEqual('table table-bordered rounded');
  });

  test('its child is a tbody HTML tag', () => {
    const component = createComponent.toJSON();
    expect(component[1].children[0].type).toEqual('tbody');
  });

  test('its child has empty props', () => {
    const component = createComponent.toJSON();
    expect(component[1].children[0].props).toEqual({});
  });

  test('its child has nothing as children', () => {
    const component = createComponent.toJSON();
    expect(component[1].children[0].children).toEqual(null);
  });

  test('render ReservedMissionsList component', () => {
    renderComponent();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
