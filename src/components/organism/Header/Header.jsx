import React from 'react';
import HeaderStyle from './HeaderStyle';
import Text from '../../atom/Text/Text';
import searchIcon from '../../../assets/icons/Search.svg';
import mailIcon from '../../../assets/icons/mail.svg';
import bellIcon from '../../../assets/icons/bell.svg';
import avatar from '../../../assets/images/Avatar.png';
import dropdownIcon from '../../../assets/icons/list.svg';

const Header = ({ openSidebar }) => {
  return (
    <>
      <HeaderStyle>
        <div className="header">
          <div className="header-left">
            <Text className="user-name" value="Hi, Taylor!" />
            <Text className="header-desc" value="Let’s check your store today" />
          </div>
          <div className="header-right">
            <div className="search-input__container">
              <img className="search-icon" alt="search icon" src={searchIcon} />
              <input className="search-input" placeholder="Search..." />
            </div>
            <img className="mail-icon" alt="mail icon" src={mailIcon} />
            <img className="bell-icon" alt="notification icon" src={bellIcon} />
            <img className="avatar-icon" alt="user avatar" src={avatar} />
            <button onClick={openSidebar} className="header-dropdown__button">
              <img src={dropdownIcon} alt="dropdown icon" />
            </button>
            <Text className="user-fullname" value="Tynisha Obey" />
          </div>
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
