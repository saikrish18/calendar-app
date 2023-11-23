import React from 'react';
import './calender.css';

interface CalendarProps {
  date: Date;
}

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const currentDate = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day) => (
      <th key={day}>{day}</th>
    ));
  };

  const renderCalendar = () => {
    const rows: JSX.Element[] = [];
    let cells: JSX.Element[] = [];
    const totalCells = 35;

    for (let i = 0; i < totalCells; i++) {
      const dayOfMonth = i - firstDayOfMonth + 1;
      const isCurrentMonth = dayOfMonth > 0 && dayOfMonth <= daysInMonth;

      const className = isCurrentMonth && dayOfMonth === currentDate ? 'highlight' : '';

      cells.push(
        <td key={i} className={className}>
          {isCurrentMonth ? dayOfMonth : ''}
        </td>
      );

      if ((i + 1) % 7 === 0) {
        rows.push(<tr key={i}>{cells}</tr>);
        cells = [];
      }
    }

    return rows;
  };

  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th colSpan={7}>{`${month} ${year}`}</th>
          </tr>
          <tr>{renderDaysOfWeek()}</tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
