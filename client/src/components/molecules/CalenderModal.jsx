import React, { useEffect, useState } from 'react';
import leftIcon from '@img/leftIcon.svg';
import rightIcon from '@img/rightIcon.svg';
import styled from 'styled-components';

const CalenderDiv = styled.div`
  position: absolute;
  top: 43px;
  right: 405px;
  display: flex;
`;
const CalenderTopBarDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 25px 0;
`;
const CalenderOuterDiv = styled.div`
  top: 20px;
  width: 400px;
  height: 390px;
  position: absolute;
  border: 1px solid #23262d;
  border-radius: 5px;
  background: white;
  text-align: center;
`;
const DayDiv = styled.div`
  width: 52px;
  height: 52px;
`;
const WeekOuterDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 7px;
`;
const WeekInnerDiv = styled.div`
`;
const CalenderInnerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CalendarIcon = styled.img`
  cursor: pointer;
`;

const CalenderModal = () => {
  const [targetMonth, setTargetMonth] = useState({ date: new Date() });
  const [startDate, setStartDate] = useState({
    date: new Date(targetMonth.date.getFullYear(), targetMonth.date.getMonth(), 1),
  });
  const [lastDate, setLastDate] = useState({
    date: new Date(targetMonth.date.getFullYear(), targetMonth.date.getMonth() + 1, 0),
  });
  const setList = () => {
    let newDate = new Date(startDate.date);
    return Array(Math.ceil((startDate.date.getDay() + lastDate.date.getDate()) / 7))
      .fill()
      .reduce((result, element, index) => {
        {
          Array(7)
            .fill()
            .map((value, i) => {
              if (i == newDate.getDay() && newDate <= lastDate.date) {
                result.push(newDate.getDate());
                newDate.setDate(newDate.getDate() + 1);
              } else {
                result.push(' ');
              }
            });
          return result;
        }
      }, []);
  };

  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const onchange = (flag) => {
    targetMonth.date.setMonth(
      flag ? targetMonth.date.getMonth() - 1 : targetMonth.date.getMonth() + 1,
    );
    setTargetMonth({ date: targetMonth.date });
    console.log(targetMonth.date);
  };
  useEffect(() => {
    console.log(' qkRNls');
    setStartDate({
      date: new Date(targetMonth.date.getFullYear(), targetMonth.date.getMonth(), 1),
    });
    setLastDate({
      date: new Date(targetMonth.date.getFullYear(), targetMonth.date.getMonth() + 1, 0),
    });
  }, [targetMonth]);

  return (
    <CalenderDiv id="calendar">
      <CalenderOuterDiv>
        <CalenderTopBarDiv>
          <CalendarIcon
            src={leftIcon}
            onClick={function () {
              onchange(true);
            }}
          />
          <div>{targetMonth.date.getMonth() + 1}월</div>
          <CalendarIcon
            src={rightIcon}
            onClick={function () {
              onchange(false);
            }}
          />
        </CalenderTopBarDiv>
        <WeekOuterDiv>
          {weeks.map((element) => (
            <WeekInnerDiv>{element}</WeekInnerDiv>
          ))}
        </WeekOuterDiv>
        <CalenderInnerDiv>
          {setList().map((element) => (
            <DayDiv>{element}</DayDiv>
          ))}
        </CalenderInnerDiv>
      </CalenderOuterDiv>
    </CalenderDiv>
  );
};

export default CalenderModal;
