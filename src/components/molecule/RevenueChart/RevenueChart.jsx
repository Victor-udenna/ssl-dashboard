import React, { useState } from 'react';
import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import RevenueChartStyle from './RevenueChartStyle';
import Text from '../../atom/Text/Text';
import elipseIcon from '../../../assets/icons/elipse.svg';
import viewIcon from '../../../assets/icons/view.svg';
import exportIcon from '../../../assets/icons/export.svg';
import removeIcon from '../../../assets/icons/remove.svg';
import Colors from '../../../helpers/Colors';

const CustomLegend = ({ payload }) => (
  <div style={{ display: 'flex', justifyContent: 'start', paddingLeft: '24px', paddingTop: '24px', gap: '20px' }}>
    {payload.map((entry, index) => (
      <div key={`legend-item-${index}`} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: entry.dataKey === 'Pending' ? '#000000' : entry.color,
          }}
        />
        <span style={{ fontSize: '12px', fontWeight: '600' }}>{entry.value}</span>
      </div>
    ))}
  </div>
);

const RevenueChart = () => {
  const data = [
    { month: 'Jan', Pending: 28.3, Income: 0, Expance: 0 },
    { month: 'Feb', Pending: 87.6, Income: 0, Expance: 0 },
    { month: 'Mar', Pending: 60, Income: 0, Expance: 0 },
    { month: 'Apr', Pending: 41, Income: 0, Expance: 0 },
    { month: 'May', Pending: 55, Income: 0, Expance: 0 },
    { month: 'Jun', Pending: 100, Income: 0, Expance: 0 },
    { month: 'Jul', Pending: 47, Income: 0, Expance: 0 },
    { month: 'Aug', Pending: 87, Income: 0, Expance: 0 },
    { month: 'Sep', Pending: 23, Income: 0, Expance: 0 },
    { month: 'Oct', Pending: 69.5, Income: 0, Expance: 0 },
    { month: 'Nov', Pending: 31, Income: 0, Expance: 0 },
    { month: 'Dec', Pending: 60, Income: 0, Expance: 0 },
  ];

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <RevenueChartStyle>
      <div className="revenuechart-header">
        <Text className="revenuechart-header__text" value={'Revenue'} />
        <button className="revenuechart-header__button" onClick={toggleMenu}>
          <img className="revenuechart-header__button__img" alt="nav-icon" src={elipseIcon} />
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
      <div className="revenue-amount">
        <Text className="revenue-amount__value" value={'$112,340'} />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barCategoryGap="30%">
          <defs>
            <linearGradient id="gradient-march" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#33C600" />
              <stop offset="100%" stopColor="#CDF4FF" />
            </linearGradient>
            <linearGradient id="gradient-june" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#B8B7FF" />
              <stop offset="100%" stopColor="#6C5DD3" />
            </linearGradient>
            <linearGradient id="gradient-october" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF4CE2" />
              <stop offset="100%" stopColor="#FFB7F5" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fontWeight: 600, fill: '#A4A4A4' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              border: 'none',
            }}
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
          />
          <Legend content={<CustomLegend />} />
          <Bar dataKey="Pending" stackId="a">
            {data.map((entry, index) => (
              <Cell
                key={`cell-pending-${index}`}
                fill={
                  index === 2
                    ? 'url(#gradient-march)'
                    : index === 5
                    ? 'url(#gradient-june)'
                    : index === 9
                    ? 'url(#gradient-october)'
                    : `${Colors.border}`
                }
                radius={[10, 10, 0, 0]}
              />
            ))}
          </Bar>
          <Bar dataKey="Income" stackId="a" fill="#6C5DD3" />
          <Bar dataKey="Expance" stackId="a" fill="#FF754C" />
        </BarChart>
      </ResponsiveContainer>
    </RevenueChartStyle>
  );
};

export default RevenueChart;
