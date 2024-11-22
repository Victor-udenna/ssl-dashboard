import React from 'react';
import SideBarStyle from './SideBarStyle';
import logo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import Text from '../../atom/Text/Text';
import dashboardIcon from '../../../assets/icons/dashboard.svg';
import bag from '../../../assets/icons/Bag.svg';
import Chart from '../../../assets/icons/Chart.svg';
import customer from '../../../assets/icons/Users.svg';
import menu from '../../../assets/icons/Document.svg';
import arrowright from '../../../assets/icons/arrow-right.svg';
import ProgressCard from '../../molecule/ProgressCard/ProgressCard';
import Xicon from '../../../assets/icons/X.svg';

const Sidebar = ({ onClose }) => {
  return (
    <SideBarStyle>
      <aside className="sidebar">
        <div className="sidebar-nav__container">
          <div className="sidebar__logo">
            <img src={logo} alt="Chucky Logo" />
          </div>
          <button onClick={onClose} className="close-button">
            <img src={Xicon} alt="x icon" />
          </button>
          <nav>
            <ul className="sidebar__menu">
              <li>
                <Link to="/" className="sidebar__link active">
                  <img className="link-icon" alt="menu icon" src={dashboardIcon} />
                  <Text value={'Dashboard'} />
                </Link>
              </li>
              <li>
                <Link to="/" className="sidebar__link">
                  <img className="link-icon" alt="menu icon" src={bag} />
                  <Text value={'Orders'} />
                  <img className="arrow-right" alt="menu icon" src={arrowright} />
                </Link>
              </li>
              <li>
                <Link to="/" className="sidebar__link">
                  <img className="link-icon" alt="menu icon" src={Chart} />
                  <Text value={'Analytics'} />
                </Link>
              </li>
              <li>
                <Link to="/" className="sidebar__link">
                  <img className="link-icon" alt="menu icon" src={customer} />
                  <Text value={'Customer'} />
                </Link>
              </li>
              <li>
                <Link to="/" className="sidebar__link">
                  <img className="link-icon" alt="menu icon" src={menu} />
                  <Text value={'Menu'} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ProgressCard />
      </aside>
    </SideBarStyle>
  );
};

export default Sidebar;
