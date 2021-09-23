import React, { useEffect, useState } from 'react';
import logo from '@img/Logo/logo.svg';
import EasterEgg from '@organisms/EasterEgg';
import deleteIcon from '@img/deleteIcon.svg';
import CalenderModal from '@molecules/CalenderModal';
import LoginModal from '@molecules/LoginModal';
import carrotImg from '../../assets/img/carrot.svg';
import styled from 'styled-components';

const DeleteIconImg = styled.img`
  width: 50px;
  z-index: 2;
`;
const TopBarDiv = styled.div`
  width: 100vw;
  height: 60px;
  background: #ff8800;
  display: flex;
  justify-content: space-between;
`;
const TopBarImg = styled.img`
  margin-left: 10px;
  width: 30px;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: #ececec;
  align-self: center;
  margin-right: 10px;
  cursor: pointer;

  & img {
    width: 30px;
    height: 30px;
  }
`;

const TopBar = () => {
  const [profileFlag, setProfileFlag] = useState(false);
  const [easterEggConfig, setEasterEggConfig] = useState(false);
  const closeModal = () => setEasterEggConfig(false);
  const isClickProfile = () => {
    profileFlag === true ? setProfileFlag(false) : setProfileFlag(true);
  };
  const OpenEasterEgg = () => {
    setEasterEggConfig(true);
  };
  useEffect(() => {
    console.log(profileFlag);
  }, [profileFlag]);
  return (
    <>
      <TopBarDiv>
        <TopBarImg src={logo} onClick={OpenEasterEgg} />
        <Profile onClick={isClickProfile}>
          <img src={carrotImg} />
        </Profile>
      </TopBarDiv>
      {profileFlag && <LoginModal />}
      {/* {profileFlag && <CalenderModal />} */}
      {easterEggConfig && (
        <>
          <EasterEgg />
          <DeleteIconImg src={deleteIcon} onClick={closeModal} />
        </>
      )}
    </>
  );
};

export default TopBar;
