'use strict';

const datetime = require('../datetime/datetime');

module.exports = (bookableMonths, availableDates, todayDate) => {
  let months = [], weeks = [];

  for (let month of bookableMonths) {
    let date = month.startOf('month').startOf('week');
    const endDate = month.endOf('month').endOf('week');

    let week;
    let dayData;

    for (let dayCount = 0; date.isBefore(endDate); date = date.add(1, 'days'), dayCount++) {

      if (dayCount % 7 === 0) {
        week = [];
        weeks.push({days: week});
      }

      dayData = date.isSameDay(todayDate) ?
      {
        date: date.toDateString(),
        day: date.date(),
        today: true,
        available_times_count: "Spots",
        bookable: date.isSameYearAndMonth(month)
      } :
      {
        date: date.toDateString(),
        day: date.date(),
        today: false,
        available_times_count: (availableDates[date.toDateString()] && date.isAfter(todayDate)) ? availableDates[date.toDateString()].available_times_count : 0,
        bookable: date.isSameYearAndMonth(month)
      };

      week.push(dayData);
    }

    let monthData = { month: month.toMonthString(), monthName: month.monthName(), weeks };

    let prevMonth = month.subtract(1, 'months');
    let nextMonth = month.add(1, 'months');
    if (prevMonth.isSameOrAfter(bookableMonths[0])) {
      monthData['prevMonth'] = prevMonth.toMonthString();
    }
    if (nextMonth.isSameOrBefore(bookableMonths[bookableMonths.length-1])) {
      monthData['nextMonth'] = nextMonth.toMonthString();
    }

    months.push(monthData);
    weeks = [];
  }

  return { months };
}