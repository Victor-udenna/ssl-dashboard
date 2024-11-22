import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import greenarrow from '../../../assets/icons/arrow-green.svg';
import purplearrow from '../../../assets/icons/arrow-purple.svg';
import CustomerChartStyle from './CustormerChartStyle';
import elipseIcon from '../../../assets/icons/elipse.svg';
import viewIcon from '../../../assets/icons/view.svg';
import exportIcon from '../../../assets/icons/export.svg';
import removeIcon from '../../../assets/icons/remove.svg';
import Text from '../../atom/Text/Text';

const CustomerChart = () => {
  const data = [
    { name: 'Current customers', value: 25, color: '#4C73FF' },
    { name: 'New customers', value: 40, color: '#9EC600' },
    { name: '', value: 40, color: '#ffffff' },
  ];

  const daily = [
    { name: 'daily', value: 25, color: '#6C5DD3' },
    { name: 'none', value: 75, color: '#E2E6FF' },
  ];

  const weekly = [
    { name: 'daily', value: 73, color: '#9EC600' },
    { name: 'none', value: 27, color: '#9EC6001A' },
  ];
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <CustomerChartStyle>
      <div className="customerchart-header">
        <div>
          <Text className="customerchart-header__text" value={'Customers'} />
          <Text className="customerchart-header__desc" value={'Customers that buy our products'} />
        </div>
        <button className="customerchart-header__button" onClick={toggleMenu}>
          <img className="customerchart-header__button__img" alt="nav-icon" src={elipseIcon} />
        </button>

        {menuVisible && (
          <div className="popup-menu">
            <div className="popup-menu-item">
              <img src={viewIcon} alt="View" className="popup-menu-icon" />
              <span>View</span>
            </div>
            <div className="popup-menu-item">
              <img src={exportIcon} alt="Export" className="popup-menu-icon" />
              <span>Export</span>
            </div>
            <div className="popup-menu-item remove">
              <img src={removeIcon} alt="Remove" className="popup-menu-icon" />
              <span>Remove</span>
            </div>
          </div>
        )}
      </div>

      <div className="customer-chart__content">
        <div className="customer-chart">
          <div className="chart-container">
            <div className="progress-chart">
              <PieChart width={200} height={200}>
                <Pie
                  data={data}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <div className="progress-percentage">
                <div className="progress-percentage__wrapper">
                  <span className="progress-percentage__value">82.3%</span>
                  <span className="progress-percentage__title">Total</span>
                </div>
              </div>
            </div>
          </div>
          <div className="chart-period__container">
            <div className="small-chart__container">
              <div className="small-chart">
                <PieChart width={80} height={80}>
                  <Pie data={daily} dataKey="value" innerRadius={25} outerRadius={35} startAngle={90} endAngle={-270}>
                    {daily.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="small-chart-icon__container daily">
                  <div className="small-chart-icon">
                    <img alt="chart icon" src={purplearrow} />
                  </div>
                </div>
              </div>
              <div className="small-chart__textvalue">
                <Text className="small-chart__value" value={'+ 18% '} />
                <Text className="small-chart__desc" value={'Daily customers'} />
              </div>
            </div>
            <div className="small-chart__container">
              <div className="small-chart">
                <PieChart width={80} height={80}>
                  <Pie data={weekly} dataKey="value" innerRadius={25} outerRadius={35} startAngle={90} endAngle={-270}>
                    {weekly.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="small-chart-icon__container weekly">
                  <div className="small-chart-icon">
                    <img alt="chart icon" src={greenarrow} />
                  </div>
                </div>
              </div>
              <div className="small-chart__textvalue">
                <Text className="small-chart__value" value={'+ 14% '} />
                <Text className="small-chart__desc" value={'Weekly new customers'} />
              </div>
            </div>
          </div>
        </div>

        <div className="legend">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="legend-item">
              <div className="legend-color" style={{ backgroundColor: entry.color }} />
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </CustomerChartStyle>
  );
};

export default CustomerChart;
