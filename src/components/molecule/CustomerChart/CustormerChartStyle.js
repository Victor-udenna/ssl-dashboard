import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const CustomerChartStyle = styled.div`
  background-color: ${Colors.white};
  padding: 36px 0px 30px 0px;
  box-shadow: 0px 8px 16px 0px #8f95b226;
  margin-top: 30px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  .customerchart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e8f0;
    padding: 0px 24px 18px 24px;
    position: relative;
    width: 100%;
  }

  .customerchart-header__text {
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: ${Colors.black};
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .customerchart-header__desc {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${Colors.neutralTxt};
  }

  .customerchart-header__button {
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

  .customer-chart__content {
    width: 100%;
  }

  .customer-chart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 24px;
    gap: 20%;
    width: 100%;
  }

  .chart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .progress-chart {
    width: 205px;
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${Colors.white};
    border-radius: 50%;
    box-shadow: 0px 8.54px 22.78px 0px #6c5dd31a;
  }

  .progress-percentage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    font-weight: bold;
    text-align: center;

    &__wrapper {
      background-color: #fafbff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 88.17px;
      border-radius: 50%;
      height: 90.32px;
      box-shadow: 0px 8.82px 17.63px 0px #d8dae5cc;
    }

    &__value {
      font-family: Inter;
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      text-align: center;
      color: #0049c6;
    }

    &__title {
      font-family: Inter;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      text-align: center;
      color: #0049c6;
    }
  }

  .small-chart__container {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .small-chart__textvalue {
    margin-top: 10px;
  }

  .small-chart__value {
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${Colors.black};
  }

  .small-chart__desc {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${Colors.neutralTxt};
  }

  .small-chart {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    position: relative;

    .small-chart-icon__container {
      position: absolute;
      top: 14.5px;
      left: 14.5px;
      padding: 11px;
      border-radius: 50%;
    }

    .small-chart-icon__container.daily {
      background-color: #e2e6ff;
    }

    .small-chart-icon__container.weekly {
      background-color: #9ec6001a;
    }

    .small-chart-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background-color: ${Colors.white};
      border-radius: 50%;
    }
  }

  .legend {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 24px;

    .legend-item {
      display: flex;
      align-items: center;
      gap: 5px;

      .legend-color {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }

      span {
        font-size: 12px;
        color: #707070;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .customer-chart {
      display: flex;
      flex-direction: column;
      padding: 24px;
      align-items: center;
    }
  }
`;

export default CustomerChartStyle;
