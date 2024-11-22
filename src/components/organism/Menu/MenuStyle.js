import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

const MenuStyle = styled.div`
  margin-top: 30px;
  .menu-container {
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 20px;
    padding: 24px 24px 0px 24px;
    border-bottom: 1px solid ${Colors.border};
  }

  .menu-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }

  .menu-categories {
    display: flex;
    gap: 15px;
  }

  .category {
    font-family: Inter;
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.10000000149011612px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    transition: color 0.3s, border-bottom 0.3s;
    padding-bottom: 24px;
    border-bottom: 2px solid transparent;
  }

  .category.active {
    color: ${Colors.brand};
    font-weight: bold;
    border-bottom: 2px solid ${Colors.brand};
  }

  .menu-special {
    display: grid;
    padding: 0px 24px;
    grid-template-columns: 2.634fr 1.366fr;
    gap: 20px;
  }

  .menu-regular {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 24px;
    gap: 20px;
  }

  .menu-card {
    height: 234px;
    width: 100%;
    position: relative;
    border-radius: 6px;
  }

  .menu-card__img {
    height: 100%;
    width: 100%;
    position: relative;
    border-radius: 6px;
  }

  .menu-card__information {
    background-color: #ffffffa6;
    border-bottom: 1px solid #ffffff;
    height: 73px;
    padding: 12px;
    border-radius: 6px;
    position: absolute;
    display: flex;
    align-items: start;
    justify-content: space-between;
    bottom: 24px;
    left: 24px;
    right: 24px;
  }

  .menu-card__title {
    font-family: Noto Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #1e293b;
  }

  .menu-card__text__container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
  }

  .menu-card__served {
    font-family: Noto Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${Colors.neutralTxt};
  }

  .menu-card__price {
    font-family: Noto Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #1e293b;
  }

  @media screen and (max-width: 1240px) {
    .menu-special,
    .menu-regular {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 576px) {
    .menu-header {
      flex-direction: column;

      span {
        font-size: 12px;
      }
    }

    .menu-special {
      grid-template-columns: 1fr;
    }

    .menu-regular {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default MenuStyle;
