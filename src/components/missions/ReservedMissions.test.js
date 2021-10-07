import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import ReservedMissions from './ReservedMissions';

const createComponent = create(
  <ReservedMissions missionName="Thaicom" missionId={uuidv4()} wikipedia="https://en.wikipedia.org/wiki/Thaicom"/>,
);

const renderComponent = (missionName) => {
  render(
    <table className="table table-striped table-hover table-bordered">
      <tbody>
        <ReservedMissions key={uuidv4()} missionName={missionName} missionId={uuidv4()} wikipedia="https://en.wikipedia.org/wiki/Thaicom"/>
      </tbody>
    </table>,
  );
};

describe('Testing ReservedMissions component', () => {
  test('type for every ReservedMissions is a tr HTML tag', () => {
    const component = createComponent.toJSON();
    expect(component.type).toEqual('tr');
  });

  test('there are no props for ReservedMissions component', () => {
    const component = createComponent.toJSON();
    expect(component.props).toEqual({});
  });

  test('it is a single element with only one child which is td HTML tag', () => {
    const component = createComponent.toJSON();
    expect(component.children[0].type).toEqual('td');
  });

  test('there is not an empty list', () => {
    renderComponent('Thaicom');
    expect(screen.getByText('Thaicom')).toBeInTheDocument();
  });

  test('it can have other names', () => {
    renderComponent('Telstar');
    expect(screen.getByText('Telstar')).toBeInTheDocument();
  });

  test('the td HTML tag (or the cell) contains the mission name', () => {
    renderComponent('Telstar');
    expect(screen.getByRole('cell')).toHaveTextContent('Telstar');
  });
});
