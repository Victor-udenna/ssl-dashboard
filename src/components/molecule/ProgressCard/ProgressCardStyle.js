import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const ProgressCardStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 16px;
  width: 229px;
  gap: 8px;
  position: relative;
  margin-top: 45px;

  .progress-section {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: flex-start;
  }

  .progress-container {
    width: 58px;
    height: 58px;
  }

  .content {
    flex: 1;

    .title {
      font-family: Inter;
      font-size: 15px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: -0.10000000149011612px;
      color: ${Colors.black};
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }

    .description {
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.10000000149011612px;
      color: ${Colors.darkneutralTxt};
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }

    .upgrade-link {
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: ${Colors.brand};
      cursor: pointer;
      margin-top: 12px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .close-icon {
    font-size: 20px;
    color: #999;
    cursor: pointer;
    position: absolute;
    right: 16px;
    color: ${Colors.progresscardColor};

    &:hover {
      color: #333;
    }
  }
`;

export default ProgressCardStyle;
