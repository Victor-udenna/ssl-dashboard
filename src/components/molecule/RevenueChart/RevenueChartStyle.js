import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const RevenueChartStyle = styled.div`
  background-color: ${Colors.white};
  padding: 36px 0px 24px 0px;
  box-shadow: 0px 8px 16px 0px #8f95b226;
  margin-top: 30px;
  border-radius: 6px;
  .revenuechart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e8f0;
    padding: 0px 24px 18px 24px;
    position: relative;
  }

  .revenuechart-header__text {
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: ${Colors.black};
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .revenuechart-header__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${Colors.white};
    cursor: pointer;
  }

  .popup-menu {
    width: 150px;
    height: 116px;
    border: 1px sold ${Colors.border};
    position: absolute;
    display: flex;
    align-items: start;
    flex-direction: column;
    top: 30px;
    right: 20px;
    background-color: ${Colors.white};
    box-shadow: 0px 8px 16px 0px #8f95b226;
    border-radius: 8px;
    padding: 16px;
    z-index: 10;
  }

  .popup-menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 0px 10px 0px;
    font-size: 14px;
    font-weight: 600;
    color: #707070;
    cursor: pointer;

    span {
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }
  }

  .popup-menu-item img {
    width: 18px;
    height: 18px;
  }

  .popup-menu-item.remove {
    color: #ff4c4c;
  }

  .revenue-amount {
    padding: 24px 24px 48px 24px;
  }

  .revenue-amount__value {
    font-family: Inter;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${Colors.textDark};
  }
`;

export default RevenueChartStyle;
