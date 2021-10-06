import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { create } from "react-test-renderer";
import { render, screen } from '@testing-library/react';
import ReservedMissionsList from "./ReservedMissionsList";
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

const createComponent = create(
  <Provider store={store}>
    <ReservedMissionsList />
  </Provider>
);

const renderComponent = () => {
  render(
    <Provider store={store}>
      <ReservedMissionsList />
    </Provider>
  );
}

describe('Testing ReservedMissionsList component', () => {
  test('type for ReservedMissionsList is a table HTML tag', () => {
    const component = createComponent.toJSON();
    expect(component.type).toEqual('table');
  });

  test('className props are present in ReservedMissionsList component', () => {
    const component = createComponent.toJSON();
    expect(component.props.className).toEqual('table table-bordered rounded');
  });

  test('its child is a tbody HTML tag', () => {
    const component = createComponent.toJSON();
    expect(component.children[0].type).toEqual('tbody');
  });

  test('its child has empty props', () => {
    const component = createComponent.toJSON();
    expect(component.children[0].props).toEqual({});
  });

  test('its child has nothing as children', () => {
    const component = createComponent.toJSON();
    expect(component.children[0].children).toEqual(null);
  });

  test('render ReservedMissionsList component', () => {
    renderComponent();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
