import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

import './styles.pcss';

const Header = () => (
  <ul className='header'>
    <li className='header__item'><Link to={routes.index}>Main</Link></li>
    <li className='header__item'><Link to={routes.team}>Team</Link></li>
    <li className='header__item'><Link to={routes.play}>Play</Link></li>
    <li className='header__item'><Link to={routes.result}>PlayResults</Link></li>
  </ul>
);

export default Header;
