import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const DashboardSummaryStyle = styled.div`
  .dashboard-summary {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 33px;
  }

  .dasboard-summary__card {
    width: 100%;
    height: 182px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 8px;
    border-radius: 6px;
    background-color: ${Colors.summaryCardbg};
    backdrop-filter: blur(27.2px);
    box-shadow: 0px 12px 16px -4px #0c1a240a;
  }

  .card-img {
    width: 48px;
    height: 48px;
    border-radius: 17px;
  }

  .summary-card__title {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    color: ${Colors.neutralTxt};
    line-height: 21px;
    text-align: left;
    padding-top: 6px;
  }

  .summary-card__count {
    font-family: Inter;
    font-size: 30px;
    font-weight: 600;
    color: ${Colors.black};
    line-height: 41.1px;
    letter-spacing: -0.8px;
    text-align: left;
  }

  @media (max-width: 768px) {
    .dashboard-summary {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .dasboard-summary__card {
      padding: 16px;
      height: auto;
    }

    .card-img {
      width: 40px;
      height: 40px;
    }

    .summary-card__title {
      font-size: 12px;
      line-height: 18px;
    }

    .summary-card__count {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

export default DashboardSummaryStyle;
