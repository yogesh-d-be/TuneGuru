import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import './Home/Navbar.css'

dayjs.extend(customParseFormat);

const dateFormat = 'DD/MM/YY';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const disabledDate = (current) => {
  // Disable dates before today and after 1 month from today
  const today = dayjs();
  const oneMonthFromToday = today.add(1, 'month');
  return current < today.startOf('day') || current > oneMonthFromToday.endOf('day');
};

const BookingForm = () => (
  <DatePicker
    onChange={onChange}
    needConfirm
    disabledDate={disabledDate}
    defaultValue={dayjs()}
    format={dateFormat}
    size='large'
  />
);

export default BookingForm;
