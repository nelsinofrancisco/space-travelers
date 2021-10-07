import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionsTable from './MissionsTable';
import store from '../../redux/configureStore';

const createComponent = create(
  <Provider store={store}>
    <MissionsTable />
  </Provider>,
);

const renderComponent = () => {
  render(
    <Provider store={store}>
      <MissionsTable />
    </Provider>,
  );
};

describe('Testing MissionsTable component', () => {
  test('render mission title', () => {
    renderComponent();
    expect(screen.getByText('Mission')).toBeInTheDocument();
  });

  test('render description title', () => {
    renderComponent();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  test('render status title', () => {
    renderComponent();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  test('the type is a div html tag', () => {
    const component = createComponent.toJSON();
    expect(component.type).toEqual('div');
  });

  test('there are no props in the component', () => {
    const component = createComponent.toJSON();
    expect(component.props).toEqual({});
  });

  test('a table is the type for its children', () => {
    const component = createComponent.toJSON();
    expect(component.children[0].type).toEqual('table');
  });
});
