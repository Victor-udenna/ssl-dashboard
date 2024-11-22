import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const HeaderStyle = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.white};
    padding: 24px;
  }

  .user-name {
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 31.2px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${Colors.black};
  }

  .header-desc {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 22.4px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${Colors.neutralTxt3};
  }
  .search-input__container {
    position: relative;
  }

  .search-icon {
    position: absolute;
    left: 18px;
    top: 13px;
  }
  .search-input {
    width: 282px;
    height: 48px;
    top: 24px;
    left: 528px;
    padding: 13px 18px 13px 48px;
    gap: 12px;
    border-radius: 12px;
    border: 1px solid ${Colors.border};
    background-color: ${Colors.inputBg};
    opacity: 0px;
  }

  .header-dropdown__button {
    display: none;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .bell-icon {
    border-right: 1px solid #eeeff2;
    padding-right: 16px;
  }

  .avatar-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-left: 16px;
  }

  .user-fullname {
    color: ${Colors.black};
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  @media (max-width: 1024px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .header-left {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .header-right {
      gap: 12px;
      justify-content: flex-start;
      width: 100%;
    }
    .search-input__container {
      width: 70%;
    }

    .search-input {
      width: 100%;
      max-width: none;
    }

    .header-dropdown__button {
      display: flex;
      border: none;
      background-color: ${Colors.white};
      img {
        width: 20px;
        height: 20px;
      }
    }

    .avatar-icon {
      display: none;
    }

    .user-fullname {
      display: none;
    }
  }

  @media (max-width: 576px) {
    .header-right {
      width: fit-content;
    }
    .user-name {
      font-size: 20px;
      line-height: 28px;
    }

    .header-desc {
      font-size: 12px;
      line-height: 18px;
    }

    .search-input {
      height: 40px;
      width: 100%;
      padding: 10px 16px 10px 40px;
    }

    .search-icon {
      top: 12px;
      width: 16px;
    }

    .mail-icon,
    .avatar-icon {
      display: none;
    }
  }
`;

export default HeaderStyle;
