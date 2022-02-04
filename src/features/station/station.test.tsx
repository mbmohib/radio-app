import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { station } from '../../mocks/db/radio.db';
import Station from './station';

test('render with station name and frequency', async () => {
  const mockHandleCurrentPlaying = jest.fn();
  render(
    <Station
      station={station}
      handleCurrentPlaying={mockHandleCurrentPlaying}
    />,
  );

  expect(screen.getByText(station.name)).toBeInTheDocument();
  expect(screen.getByText(station.frequency)).toBeInTheDocument();
});

test('show details if isPlaying true', async () => {
  const mockHandleCurrentPlaying = jest.fn();
  render(
    <Station
      isPlaying={true}
      station={station}
      handleCurrentPlaying={mockHandleCurrentPlaying}
    />,
  );

  expect(screen.getByAltText(station.name)).toBeInTheDocument();
  expect(screen.getByAltText('minus button')).toBeInTheDocument();
  expect(screen.getByAltText('plus button')).toBeInTheDocument();
});

test('hide details if isPlaying false', async () => {
  const mockHandleCurrentPlaying = jest.fn();
  render(
    <Station
      isPlaying={false}
      station={station}
      handleCurrentPlaying={mockHandleCurrentPlaying}
    />,
  );

  expect(screen.queryByAltText(station.name)).toBeNull();
  expect(screen.queryByAltText(/minus/i)).toBeNull();
  expect(screen.queryByAltText(/plus/i)).toBeNull();
});

test('fire handleCurrentPlaying function on click', async () => {
  const mockHandleCurrentPlaying = jest.fn();
  render(
    <Station
      station={station}
      handleCurrentPlaying={mockHandleCurrentPlaying}
    />,
  );

  const name = screen.getByText(station.name);
  userEvent.click(name);

  expect(mockHandleCurrentPlaying).toHaveBeenCalled();
  expect(mockHandleCurrentPlaying).toHaveBeenCalledTimes(1);
});
