import React, { useState, useEffect } from 'react';
import menuIcon from '../../../assets/icons/totalmenu.svg';
import revenuIcon from '../../../assets/icons/revenue.svg';
import totalcustomer from '../../../assets/icons/totalcustomer.svg';
import totalorder from '../../../assets/icons/totalorder.svg';
import Text from '../../atom/Text/Text';
import DashboardSummaryStyle from './DashboardSummaryStyle';

const DashboardSummary = () => {
  const [menuCount, setMenuCount] = useState(0);
  const [revenueCount, setRevenueCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  const animateCount = (targetValue, setValue) => {
    let count = 0;
    const step = targetValue / 100;

    const interval = setInterval(() => {
      count += step;
      if (count >= targetValue) {
        clearInterval(interval);
        count = targetValue;
      }
      setValue(Math.floor(count));
    }, 10);
  };

  useEffect(() => {
    animateCount(345, setMenuCount);
    animateCount(37193, setRevenueCount);
    animateCount(1349, setCustomerCount);
    animateCount(3500, setOrderCount);
  }, []);

  return (
    <DashboardSummaryStyle>
      <div className="dashboard-summary">
        <div className="dasboard-summary__card">
          <img className="card-img" src={menuIcon} alt="card-icon" />
          <Text className="summary-card__title" value={'Total Menu'} />
          <Text className="summary-card__count" value={menuCount} />
        </div>

        <div className="dasboard-summary__card">
          <img className="card-img" src={revenuIcon} alt="card-icon" />
          <Text className="summary-card__title" value={'Total Revenue'} />
          <Text className="summary-card__count" value={`$${revenueCount.toLocaleString()}`} />
        </div>

        <div className="dasboard-summary__card">
          <img className="card-img" src={totalcustomer} alt="card-icon" />
          <Text className="summary-card__title" value={'Total Customer'} />
          <Text className="summary-card__count" value={customerCount} />
        </div>

        <div className="dasboard-summary__card">
          <img className="card-img" src={totalorder} alt="card-icon" />
          <Text className="summary-card__title" value={'Total Orders'} />
          <Text className="summary-card__count" value={orderCount} />
        </div>
      </div>
    </DashboardSummaryStyle>
  );
};

export default DashboardSummary;
