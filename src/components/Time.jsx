import React, { useEffect, useState } from 'react';
import { Space, Button, Dropdown, Menu } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import'./Home/Navbar.css'
const format = 'h:mm a';

const allowedTimes = [
  { time: '10:00 AM', category: 'Morning' }, { time: '10:30 AM', category: 'Morning' },
  { time: '11:00 AM', category: 'Morning' }, { time: '11:30 AM', category: 'Morning' },
  { time: '12:00 PM', category: 'Afternoon' }, { time: '12:30 PM', category: 'Afternoon' },
  { time: '1:00 PM', category: 'Afternoon' }, { time: '1:30 PM', category: 'Afternoon' },
  { time: '3:00 PM', category: 'Afternoon' }, { time: '3:30 PM', category: 'Afternoon' },
  { time: '4:00 PM', category: 'Evening' }, { time: '4:30 PM', category: 'Evening' },
  { time: '5:00 PM', category: 'Evening' }, { time: '5:30 PM', category: 'Evening' },
  { time: '6:00 PM', category: 'Evening' }, { time: '6:30 PM', category: 'Evening' },
  { time: '7:00 PM', category: 'Evening' }
];


const Timing = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false)


useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 550);
    };

   
    handleResize();

    
    window.addEventListener('resize', handleResize);

   
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onChange = (time, timeString, category) => {
    setSelectedTime({ time: timeString, category });
    console.log(time, timeString);
    setOpen(false); 
  };

  const clearSelectedTime = () => {
    setSelectedTime(null);
  };

  const menu = (
    <Menu >
      <Menu.SubMenu title="Morning">
        {allowedTimes.filter(({ category }) => category === 'Morning').map(({ time }) => (
          <Menu.Item key={time} onClick={() => onChange(dayjs(time, format), time, 'Morning')}>
            {time}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu title="Afternoon">
        {allowedTimes.filter(({ category }) => category === 'Afternoon').map(({ time }) => (
          <Menu.Item key={time} onClick={() => onChange(dayjs(time, format), time, 'Afternoon')}>
            {time}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu title="Evening">
        {allowedTimes.filter(({ category }) => category === 'Evening').map(({ time }) => (
          <Menu.Item key={time} onClick={() => onChange(dayjs(time, format), time, 'Evening')}>
            {time}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );

  return (
    <Space wrap>
      <div className='flex items-center'>
      <Dropdown overlay={menu} trigger={['click']} visible={open} onVisibleChange={setOpen} className="">
        <Button className='w-[150px] text-left mo:pr-4 mo:w-fit size-10'>
          {selectedTime ?  (isMobile ? `${selectedTime.time}` : `${selectedTime.time} - ${selectedTime.category}`) : 'Select Time'}
        </Button>

      </Dropdown>
      {selectedTime && (
        <Button size="small" icon={<CloseOutlined />} onClick={clearSelectedTime} />
      )}
      </div>
    </Space>
  );
};

export default Timing;
