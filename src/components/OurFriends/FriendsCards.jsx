import React, { useState } from 'react';
import { getDate, getDay, getMonth, getYear, isWithinInterval } from 'date-fns';

import css from './FriendsCards.module.css';

export default function FriendsCards({ sponsors }) {
  const [visibleCardIndex, setVisibleCardIndex] = useState(null);
  const now = new Date();
  const currentDay = getDay(now); // 0: Sunday, 1: Monday, ..., 6: Saturday
  const currentNumberDay = getDate(now);
  const currentMonth = getMonth(now);
  const currentYear = getYear(now);

  // Check if the shop is open now
  const isOpenNow = hours => {
    if (!hours?.isOpen) return;

    return isWithinInterval(now, {
      start: new Date(
        currentYear,
        currentMonth,
        currentNumberDay,
        parseInt(hours.from.split(':')[0]),
        parseInt(hours.from.split(':')[1])
      ),
      end: new Date(
        currentYear,
        currentMonth,
        currentNumberDay,
        parseInt(hours.to.split(':')[0]),
        parseInt(hours.to.split(':')[1])
      ),
    });
  };

  const getDayName = dayIndex => {
    const daysOfWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    return daysOfWeek[dayIndex];
  };

  // Helper function to format the time without leading zero
  const formatTime = time => {
    if (!time) return '';

    const [hour, minute] = time.split(':').map(str => parseInt(str, 10));
    return `${hour}:${minute.toString().padStart(2, '0')}`;
  };

  // Toggle the display of working hours for the specific card
  const handleToggleWorkingHours = index => {
    setVisibleCardIndex(index === visibleCardIndex ? null : index);
  };

  return (
    <>
      <ul className={css.list}>
        {sponsors.map(
          (
            {
              _id,
              title,
              url,
              addressUrl,
              imageUrl,
              address,
              workDays,
              phone,
              email,
            },
            index
          ) => {
            return (
              <li key={_id} className={css.card}>
                <a href={url} className={css.title} target="blanc">
                  {title}
                </a>
                <div className={css.columnContainer}>
                  <div className={css.imgContainer}>
                    <img
                      src={
                        imageUrl ||
                        'https://static.vecteezy.com/system/resources/previews/000/618/739/original/cute-little-kitten-vector.jpg'
                      }
                      alt="Logo"
                      className={css.img}
                    />
                  </div>
                  <ul className={css.info}>
                    <li
                      className={css.infoItem}
                      onClick={() => handleToggleWorkingHours(index)}
                    >
                      {workDays ? (
                        <div className={css.time}>
                          <p className={css.label}>Time:</p>
                          {isOpenNow(workDays[currentDay]) ? (
                            <p className={css.text}>Is currently open</p>
                          ) : (
                            <p className={css.text}>Closed</p>
                          )}
                        </div>
                      ) : (
                        <>
                          <p className={css.labelNoInfo}>Time:</p>
                          <p className={css.textNoInfo}>No information</p>
                        </>
                      )}
                      {workDays && index === visibleCardIndex && (
                        <div className={css.workingHoursBlock}>
                          <table className={css.workingHoursTable}>
                            <tbody>
                              {workDays.map((day, dayIndex) => (
                                <tr key={dayIndex}>
                                  <td className={css.tableColumn}>
                                    {getDayName(dayIndex)}
                                  </td>
                                  <td>
                                    {formatTime(day.from)} -{' '}
                                    {formatTime(day.to)}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </li>
                    <li className={css.infoItem}>
                      <p className={css.label}>Adress:</p>
                      <a
                        href={addressUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.text}
                      >
                        {address || 'website only'}
                      </a>
                    </li>
                    {email && (
                      <li className={css.infoItem}>
                        <p className={css.label}>Email:</p>
                        <a href="mailto:{email}" className={css.text}>
                          {email}
                        </a>
                      </li>
                    )}
                    {phone && (
                      <li className={css.infoItem}>
                        <p className={css.label}>Phone:</p>
                        <a href="tel:{phone}" className={css.text}>
                          {phone}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}
