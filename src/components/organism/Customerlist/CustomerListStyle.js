import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const CustomerListStyle = styled.div`
  .customer-list {
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0px 8px 16px 0px #8f95b226;
    padding: 16px;
    height: 445px;
    /* width: 289px; */
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    color: #1d1d1d;
    margin-bottom: 16px;
  }

  .list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .list-item {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-bottom: 13px;
  }

  .list-item:last-child {
    margin-bottom: 0;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .name {
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    color: ${Colors.black};
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .email {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${Colors.neutralTxt};
  }
`;

export default CustomerListStyle;
