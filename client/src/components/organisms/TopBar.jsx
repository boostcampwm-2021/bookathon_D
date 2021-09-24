import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '@img/Logo/logo.svg';
import EasterEgg from '@organisms/EasterEgg';
import deleteIcon from '@img/deleteIcon.svg';
import CalenderModal from '@molecules/CalenderModal';
import LoginModal from '@molecules/LoginModal';
import carrotImg from '../../assets/img/carrot.svg';
import styled from 'styled-components';
import { logoutAction } from '../../actions/actionCreators';

const DeleteIconImg = styled.img`
  position: absolute;
  width: 50px;
  top: 70px;
  z-index: 99;
  left: calc(50% - 25px);
  cursor: pointer;
`;
const TopBarDiv = styled.div`
  width: 100vw;
  height: 60px;
  background: #ff8800;
  display: flex;
  justify-content: space-between;
`;
const LogoText = styled.span`
  position: absolute;
  top: 18px;
  left: 55px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
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
const AuthModalBtn = styled.button`
  background: #28a745;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;
const AuthModalList = styled.ul`
  position:absolute;
  top: 65px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #ff8800;
  list-style-type: none;
`;
const AuthModalListItem = styled.li`
  padding: 15px;
`;

const TopBar = ({
  userState,
  logoutAction
}) => {
  const history = useHistory();
  const [profileFlag, setProfileFlag] = useState(false);
  const [easterEggConfig, setEasterEggConfig] = useState(false);
  const [shouldShowCalendar, setShouldShowCalendar] = useState(false);

  const closeEasterEggModal = () => setEasterEggConfig(false);
  const toggleProfileDiv = () => {
    setProfileFlag(!profileFlag);
  };
  const OpenEasterEgg = () => {
    setEasterEggConfig(true);
  };

  const closeProfileMenu = () => {
    setProfileFlag(false);
  };

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.closest('#profileMenu') || e.target.closest('#profileIcon')) return
      closeProfileMenu();
    });
    window.addEventListener('click', (e) => {
      if (e.target.closest('#profileMenu') || e.target.closest('#calendar')) return;
      setShouldShowCalendar(false);
    })
  }, []);

  const redirectToHome = () => {
    closeProfileMenu();
    history.push('/');
  };

  const logout = async () => {
    closeProfileMenu();
    await logoutAction();
  }

  const openCalendar = () => {
    closeProfileMenu()
    setShouldShowCalendar(true);
  }

  const directToRankingPage = () => {
    history.push('/ranking');
    closeProfileMenu();
  }

  const guestModal = (
    <LoginModal closeProfileMenu={closeProfileMenu} />
  );
  const authModal = (
    <AuthModalList id="profileMenu">
      <AuthModalListItem>
        <AuthModalBtn onClick={openCalendar}>캘린더</AuthModalBtn>
      </AuthModalListItem>
      <AuthModalListItem>
        <AuthModalBtn onClick={directToRankingPage}>랭킹</AuthModalBtn>
      </AuthModalListItem>
      <AuthModalListItem>
        <AuthModalBtn onClick={logout}>로그아웃</AuthModalBtn>
      </AuthModalListItem>
    </AuthModalList>
  );

  return (
    <>
      <TopBarDiv>
        <TopBarImg src={logo} onClick={OpenEasterEgg} />
        <LogoText onClick={redirectToHome}>자라나라 당근당근</LogoText>
        <Profile onClick={toggleProfileDiv} id="profileIcon">
          <img src={carrotImg} />
        </Profile>
      </TopBarDiv>
      {profileFlag && (userState.isAuthenticated ? authModal : guestModal)}
      {shouldShowCalendar && <CalenderModal />}
      {easterEggConfig && (
        <>
          <EasterEgg />
          <DeleteIconImg src={deleteIcon} onClick={closeEasterEggModal} />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userState: state.userState
});

export default connect(mapStateToProps, { logoutAction })(TopBar);
