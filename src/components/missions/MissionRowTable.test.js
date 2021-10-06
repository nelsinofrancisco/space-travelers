import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import MissionRowTable from "./MissionRowTable";

const propsVariables = () => {
  const titleProp = "Thaicom";
  const descriptionProp = "Thaicom is the name of a series of communications satellites operated from Thailand and also the name of Thaicom Public Company Limited";
  const missionIdProp = "1";
  return ([titleProp, descriptionProp, missionIdProp]);
}

const renderComponent = (reservedStatus) => {
  let [title, description, missionId] = propsVariables();
  render(
    <table className="table table-striped table-hover table-bordered">
      <tbody>
        <MissionRowTable
          key={uuidv4()}
          missionName={title}
          description={description}
          missionId={missionId}
          reserved={reservedStatus}
        />
      </tbody>
    </table>
  );
}

describe('Testing MissionRowTable component', () => {
  test('render first column title according to the API', () => {
    renderComponent(false);
    expect(screen.getByText('Thaicom')).toBeInTheDocument();
  })

  test('render description when reserved is true', () => {
    renderComponent(false);
    let description = propsVariables()[1];
    expect(screen.getByText(description)).toBeInTheDocument();
  })

  test('render status text', () => {
    renderComponent(false);
    expect(screen.getByText('NOT A MEMBER')).toBeInTheDocument();
  })

  test('render button to join a mission', () => {
    renderComponent(false);
    expect(screen.getByText('Join Mission')).toBeInTheDocument();
  })

  test('render first column title according to the API', () => {
    renderComponent(true);
    expect(screen.getByText('Thaicom')).toBeInTheDocument();
  })

  test('render status text when reserved is true', () => {
    renderComponent(true);
    expect(screen.getByText('MEMBER')).toBeInTheDocument();
  })

  test('render button to leave a mission when reserved is true', () => {
    renderComponent(true);
    expect(screen.getByText('Leave Mission')).toBeInTheDocument();
  })

  test('render description when reserved is true', () => {
    renderComponent(true);
    let description = propsVariables()[1];
    expect(screen.getByText(description)).toBeInTheDocument();
  })

  test('render button join mission by role', () => {
    renderComponent(false);
    expect(screen.getByRole("button")).toHaveTextContent('Join Mission')
  })

  test('render button leave mission by role', () => {
    renderComponent(true);
    expect(screen.getByRole("button")).toHaveTextContent('Leave Mission')
  })
});
