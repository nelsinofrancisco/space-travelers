import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Logo from '../planet_bigger.png';
import NavStyles from './NavBar.module.css';

const NavBar = () => {
  const location = useLocation();
  const rocketLinkStyle = (pathname) => {
    if (pathname === '/rockets' || pathname === '/' || pathname === '') {
      return `${NavStyles.linksStyles} ${NavStyles.mr1} ${NavStyles.active}`;
    }
    return `${NavStyles.linksStyles} ${NavStyles.mr1}`;
  };

  const missionsLinkStyle = (pathname) => {
    if (pathname === '/missions') {
      return `${NavStyles.linksStyles} ${NavStyles.borderRight} ${NavStyles.active}`;
    }
    return `${NavStyles.linksStyles} ${NavStyles.borderRight}`;
  };

  const myProfileLinkStyle = (pathname) => {
    if (pathname === '/my-profile') {
      return `${NavStyles.linksStyles} ${NavStyles.ml1} ${NavStyles.active}`;
    }
    return `${NavStyles.linksStyles} ${NavStyles.ml1}`;
  };

  return (
    <nav className={NavStyles.navbarContainer}>
      <div className={NavStyles.logoContainer}>
        <img src={Logo} alt="" className={`${NavStyles.logo} ${NavStyles.mr1}`} />
        <h1>Space Travelers HUB</h1>
      </div>
      <div className={NavStyles.linksContainer}>
        <NavLink key={uuidv4()} className={rocketLinkStyle(location.pathname)} to="/rockets">Rockets</NavLink>
        <NavLink key={uuidv4()} className={missionsLinkStyle(location.pathname)} to="/missions">Missions</NavLink>
        <NavLink key={uuidv4()} className={myProfileLinkStyle(location.pathname)} to="/my-profile">My Profile</NavLink>
      </div>

    </nav>
  );
};

export default NavBar;
