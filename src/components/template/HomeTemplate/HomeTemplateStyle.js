import styled from 'styled-components';
import Colors from '../../../helpers/Colors';
const HomeTemplateStyle = styled.div`
  display: grid;
  grid-template-columns: 271px 1fr;
  height: 100vh;
  overflow: hidden;

  .dashboard {
    background-color: ${Colors.neutral};
    overflow: scroll;
  }

  .main-content {
    padding: 24px;
  }

  .dashboard-chart__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 13px;
  }

  .customer-list__container {
    display: grid;
    grid-template-columns: 1fr 286px;
    gap: 31px;
    margin-top: 31px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;

    .customer-list__container {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 1240px) {
    .dashboard-chart__container {
      grid-template-columns: 1fr;
    }
  }
`;

export default HomeTemplateStyle;
