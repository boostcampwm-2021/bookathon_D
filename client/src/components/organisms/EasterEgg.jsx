import React, { useState, useEffect } from 'react';
import logo from '@img/Logo/logo.svg';
import styled from 'styled-components';

const MiniGameModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  background: #ffffff;
  margin: -250px 0 0 -310px;
  border: 1px solid #23262d;
  border-radius: 5px;
  width: 600px;
  height: 400px;
  align-items: center;
`;
const Background = styled.div`
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 1;
`;
const MiniGameTitle = styled.div`
  font-size: 50px;
`;
const MiniGameButton = styled.button`
  margin-bottom: 10px;
`;

const MiniGameImage = styled.img`
  max-width: 100px;
  z-index: 2;
  min-width: 30px;
  width: 9vw;
`;

const MiniGameOuterDiv = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const MiniGameInnerDiv = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const RankModal = styled.div`
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
  border-radius: 40px;
  width: 400px;
  height: 300px;
  flex-direction: column;
  padding: 20px;
`;
const RankInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const EasterEgg = () => {
  const carrotColorList = [
    'black',
    'black',
    'blue',
    'blue',
    'red',
    'red',
    'brown',
    'brown',
    'aquamarine',
    'aquamarine',
    'bisque',
    'bisque',
    'yellowgreen',
    'yellowgreen',
    'yellow',
    'yellow',
    'violet',
    'violet',
    'thistle',
    'thistle',
    'aliceblue',
    'aliceblue',
    'aqua',
    'aqua',
  ];
  const [isStart, setIsStart] = useState(true);
  const [carrotList, setCarrotList] = useState(carrotColorList.sort(() => Math.random() - 0.5));
  const [count, setCount] = useState(0);
  const [queue, setQueue] = useState([]);
  const [hide, setHide] = useState(Array(24).fill(true));

  const startGame = () => {
    setCarrotList(
      carrotColorList
        .sort(() => Math.random() - 0.5)
        .reduce((result, element, index) => {
          result.push({
            value: element,
            // x: (index % 6) * 150,
            // y: 150 * Math.floor(index / 6),
            hide: true,
          });
          return result;
        }, []),
    );
    setIsStart(false);
    setTimeout(() => setHide(Array(24).fill(false)), 1000);
  };
  const changeState = (idx, flag) => {
    setHide((hide) => ({ ...hide, [idx]: flag }));
    flag && !hide[idx] ? setQueue([...queue, idx]) : null;
  };

  useEffect(() => {
    if (queue.length >= 2) {
      carrotList[queue[0]]['value'] !== carrotList[queue[1]]['value']
        ? setTimeout(() => {
            queue.map((element) => {
              changeState(element, false);
            });
          }, 500)
        : setCount(count + 1);
      setQueue([]);
    }
  }, [queue]);

  useEffect(() => {
    if (
      Object.values(hide).length ===
        Object.values(hide).reduce((result, element) => {
          result += element === true ? 1 : 0;
          return result;
        }, 0) &&
      count > 0
    ) {
      setIsStart(true);
    }
  }, [hide]);

  return (
    <>
      <Background />
      <MiniGameModalDiv>
        <MiniGameOuterDiv
          style={{
            display: isStart ? 'flex' : 'none',
          }}
        >
          <MiniGameTitle>같은 당근 찾기</MiniGameTitle>
          <MiniGameButton onClick={startGame}>시작하기</MiniGameButton>
        </MiniGameOuterDiv>
        <MiniGameInnerDiv
          style={{
            display: !isStart ? 'flex' : 'none',
          }}
        >
          {carrotList.map((item, idx) => (
            <MiniGameImage
              src={logo}
              style={{
                backgroundColor: hide[idx] === true ? item['value'] : 'coral',
              }}
              onClick={() => changeState(idx, true)}
            />
          ))}
        </MiniGameInnerDiv>
      </MiniGameModalDiv>
    </>
  );
};

export default EasterEgg;
