import React, { useState } from 'react';
import styled from 'styled-components';

const RankingDiv = styled.div`
  display: flex;
`;
const RankingOuterDiv = styled.div`
  width: ${window.screen.width / 2}px;
  // border: 1px solid rgb(226, 154, 154, 0.5);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;
const TotalRankingDiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ff8800;
  border-radius: 5px;
  background: #ff8800;
  align-items: center;
  padding: 40px 100px;
`;
const TotalOuterDiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ff8800;
  border-radius: 5px;
  background: #ff8800;
  align-items: center;
  padding: 40px 100px;
`;
const TimerText = styled.span`
  font-size: 110px;
`;
const RankingTimerText = styled.span`
  font-size: 40px;
`;
const WeekDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;
const WeekSvg = styled.svg``;
const StatisticOuterDiv = styled.div`
  margin-top: 100px;
  display: flex;
  width: 800px;
  height: 400px;
  border: 1px solid #ff8800;
  border-radius: 5px;
  background: #ff8800;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
const DetailPage = () => {
  const weekList = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  return (
    <RankingDiv>
      <RankingOuterDiv>
        <TotalOuterDiv>
          <div>누적 작업 시간 (오늘)</div>
          <TimerText>{'0:0:0'}</TimerText>
        </TotalOuterDiv>
        <StatisticOuterDiv>
          {weekList.map((element) => (
            <WeekDiv>
              <WeekSvg>
                <rect x="30" y="0" width="40" height="100" fill="white" />
              </WeekSvg>
              <div>{element}</div>
            </WeekDiv>
          ))}
        </StatisticOuterDiv>
      </RankingOuterDiv>
      <RankingOuterDiv>
        <TotalRankingDiv>
          <div>누적 작업 시간 (오늘)</div>
          <RankingTimerText>{'0:0:0'}</RankingTimerText>
        </TotalRankingDiv>
        <TotalRankingDiv>
          <div>누적 작업 시간 (오늘)</div>
          <RankingTimerText>{'0:0:0'}</RankingTimerText>
        </TotalRankingDiv>
        <TotalRankingDiv>
          <div>누적 작업 시간 (오늘)</div>
          <RankingTimerText>{'0:0:0'}</RankingTimerText>
        </TotalRankingDiv>
        <TotalRankingDiv>
          <div>누적 작업 시간 (오늘)</div>
          <RankingTimerText>{'0:0:0'}</RankingTimerText>
        </TotalRankingDiv>
      </RankingOuterDiv>
    </RankingDiv>
  );
};

export default DetailPage;
