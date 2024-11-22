import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const CustomerMapStyle = styled.div`
  background-color: ${Colors.white} !important;
  position: relative;
  padding: 36px 0px 24px 0px;
  border-radius: 6px;
  height: 445px;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px 0px #8f95b226;

  .customermap-header {
    display: flex;
    align-items: center;
    justify-content: start;
    border-bottom: 1px solid #e6e8f0;
    padding: 0px 24px 18px 24px;
    position: relative;
  }
  .customermap-header__text {
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: ${Colors.black};
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
  .leaflet-container {
    border-radius: 12px;
    width: calc(100% - 48px) !important;
    height: calc(100% - 60px) !important;
    margin: 24px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }

  .tooltip {
    width: 112px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 12px 16px 12px 16px;
    gap: 8px;
    border-radius: 8px;

    &__location {
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: ${Colors.black};
    }

    &__customer-count {
      font-family: Inter;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: ${Colors.tooltiptxt};
    }
  }
`;

export default CustomerMapStyle;
