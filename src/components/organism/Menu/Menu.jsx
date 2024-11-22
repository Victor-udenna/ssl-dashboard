import React from 'react';
import MenuStyle from './MenuStyle';
import food1 from '../../../assets/images/food1.png';
import food2 from '../../../assets/images/food2.png';
import food3 from '../../../assets/images/food3.png';
import food4 from '../../../assets/images/food4.png';
import food5 from '../../../assets/images/food5.png';
import food6 from '../../../assets/images/food6.png';
import Text from '../../atom/Text/Text';
const menuItems = [
  {
    name: 'Surf & Turf Gift Basket',
    price: '$89.24',
    image: 'https://via.placeholder.com/300x200',
    served: '456 Served',
  },
  { name: 'Shaking Beef Tri-Tip', price: '$69.46', image: 'https://via.placeholder.com/300x200', served: '456 Served' },
  { name: 'BBQ Rib Dinner', price: '$69.21', image: 'https://via.placeholder.com/300x200', served: '456 Served' },
  { name: 'Chicken & Ribs Combo', price: '$98.49', image: 'https://via.placeholder.com/300x200', served: '456 Served' },
  { name: 'Fried Chicken Dinner', price: '$83.56', image: 'https://via.placeholder.com/300x200', served: '456 Served' },
  { name: 'Dark & Stormy', price: '$90.50', image: 'https://via.placeholder.com/300x200', served: '456 Served' },
];

const Menu = () => {
  return (
    <MenuStyle>
      <div className="menu-container">
        <div className="menu-header">
          <h2 className="menu-title">Menu</h2>
          <div className="menu-categories">
            <span className="category active">All Category</span>
            <span className="category">Breakfast</span>
            <span className="category">Lunch</span>
            <span className="category">Dinner</span>
          </div>
        </div>

        <div className="menu-special">
          <div className="menu-card">
            <img className="menu-card__img" src={food1} alt="food1" />
            <div className="menu-card__information">
              <div className="menu-card__text__container">
                <Text className="menu-card__title" value={'Surf & Turf Gift Basket'} />
                <Text className="menu-card__served" value={'456 Served'} />
              </div>
              <Text className="menu-card__price" value={'$320'} />
            </div>
          </div>
          <div className="menu-card">
            <img className="menu-card__img" src={food2} alt="food1" />
            <div className="menu-card__information">
              <div className="menu-card__text__container">
                <Text className="menu-card__title" value={'Surf & Turf Gift Basket'} />
                <Text className="menu-card__served" value={'456 Served'} />
              </div>
              <Text className="menu-card__price" value={'$320'} />
            </div>
          </div>
        </div>

        <div className="menu-regular">
          <div className="menu-card">
            <img className="menu-card__img" src={food3} alt="food1" />
            <div className="menu-card__information">
              <div className="menu-card__text__container">
                <Text className="menu-card__title" value={'Surf & Turf Gift Basket'} />
                <Text className="menu-card__served" value={'456 Served'} />
              </div>
              <Text className="menu-card__price" value={'$320'} />
            </div>
          </div>{' '}
          <div className="menu-card">
            <img className="menu-card__img" src={food4} alt="food1" />
            <div className="menu-card__information">
              <div className="menu-card__text__container">
                <Text className="menu-card__title" value={'Surf & Turf Gift Basket'} />
                <Text className="menu-card__served" value={'456 Served'} />
              </div>
              <Text className="menu-card__price" value={'$320'} />
            </div>
          </div>{' '}
          <div className="menu-card">
            <img className="menu-card__img" src={food5} alt="food1" />
            <div className="menu-card__information">
              <div className="menu-card__text__container">
                <Text className="menu-card__title" value={'Surf & Turf Gift Basket'} />
                <Text className="menu-card__served" value={'456 Served'} />
              </div>
              <Text className="menu-card__price" value={'$320'} />
            </div>
          </div>{' '}
          <div className="menu-card">
            <img className="menu-card__img" src={food6} alt="food1" />
            <div className="menu-card__information">
              <div className="menu-card__text__container">
                <Text className="menu-card__title" value={'Surf & Turf Gift Basket'} />
                <Text className="menu-card__served" value={'456 Served'} />
              </div>
              <Text className="menu-card__price" value={'$320'} />
            </div>
          </div>
        </div>
      </div>
    </MenuStyle>
  );
};

export default Menu;
