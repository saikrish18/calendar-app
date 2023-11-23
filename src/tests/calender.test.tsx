import React from 'react';
import { render } from '@testing-library/react';
import Calendar from '../components/calender';

describe('Calendar Component', () => {
  test('displays the correct month and year in the header', () => {
    const date = new Date('2022-10-03');
    const { getByText } = render(<Calendar date={date} />);

    const monthYearHeader = getByText('October 2022');
    expect(monthYearHeader).toBeInTheDocument();
  });

  test('highlights the current date in the calendar', () => {
    const date = new Date();
    const { getByText } = render(<Calendar date={date} />);

    const currentDate = getByText(date.getDate().toString());
    expect(currentDate).toHaveClass('highlight');
  });
});
