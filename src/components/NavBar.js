import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Logo from '../planet_bigger.png';
import NavStyles from './NavBar.module.css';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className={NavStyles.navbarContainer}>
      <div className={NavStyles.logoContainer}>
        <img src={Logo} alt="" className={`${NavStyles.logo} ${NavStyles.mr1}`} />
        <h1>Space Travelers HUB</h1>
      </div>
      <div className={NavStyles.linksContainer}>
        <NavLink key={uuidv4()} className={(location.pathname === '/rockets' ? `${NavStyles.linksStyles} ${NavStyles.mr1} ${NavStyles.active}` : `${NavStyles.linksStyles} ${NavStyles.mr1}`)} to="/rockets">Rockets</NavLink>
        <NavLink key={uuidv4()} className={(location.pathname === '/missions' ? `${NavStyles.linksStyles} ${NavStyles.borderRight} ${NavStyles.active}` : `${NavStyles.linksStyles} ${NavStyles.borderRight}`)} to="/missions">Missions</NavLink>
        <NavLink key={uuidv4()} className={(location.pathname === '/my-profile' ? `${NavStyles.linksStyles} ${NavStyles.ml1} ${NavStyles.active}` : `${NavStyles.linksStyles} ${NavStyles.ml1}`)} to="/my-profile">My Profile</NavLink>
      </div>

    </nav>
  );
};

export default NavBar;
