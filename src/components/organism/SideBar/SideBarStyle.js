import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const SideBarStyle = styled.div`
  .sidebar {
    background-color: ${Colors.white};
    padding: 45px 0px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .sidebar__logo {
    img {
      width: 181px;
      height: 53px;
    }
  }

  nav {
    padding-top: 73px;
  }

  .sidebar__menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sidebar__menu li {
    margin-bottom: 1rem;
  }

  .sidebar__link {
    display: flex;
    align-items: center;
    gap: 19px;
    text-decoration: none;
    width: 216px;
    height: 56px;
    border-radius: 12px;
    padding: 0px 20px;
    p {
      font-family: Inter;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      text-align: left;
      color: ${Colors.neutralTxt2};
    }

    .link-icon {
      width: 24px;
      height: 24px;
    }

    .arrow-right {
      margin-left: 45px;
    }
  }

  .sidebar__link:hover,
  .sidebar__link.active {
    background-color: ${Colors.brand};
    p {
      color: ${Colors.white};
    }
  }

  .sidebar__link i {
    margin-right: 0.5rem;
  }

  .subscription-container {
    width: 229px;
    height: 199px;
    top: 784px;
    left: 21px;
    padding: 16px;
    gap: 16px;
    border-radius: 10px;
  }

  .close-button {
    display: none;
  }

  @media (max-width: 1024px) {
    .sidebar {
      position: fixed;
      top: 0;
      bottom: 0;
      z-index: 10;
      align-items: start;
      padding: 24px;
    }

    .close-button {
      display: flex;
      position: absolute;
      width: fit-content;
      background-color: ${Colors.white};
      padding: 8px;
      border: none;
      right: 24px;
      top: 24px;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export default SideBarStyle;
