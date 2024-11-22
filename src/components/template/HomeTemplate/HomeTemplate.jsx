import React, { useState, useEffect } from 'react';
import HomeTemplateStyle from './HomeTemplateStyle';
import SideBar from '../../organism/SideBar/SideBar';
import Header from '../../organism/Header/Header';
import DashboardSummary from '../../organism/DashboardSummary/DashboardSummary';
import RevenueChart from '../../molecule/RevenueChart/RevenueChart';
import CustomerChart from '../../molecule/CustomerChart/CustomerChart';
import CustomerMap from '../../organism/CustomerMap/CusomerMap';
import CustomerList from '../../organism/Customerlist/CustomerList';
import Menu from '../../organism/Menu/Menu';

const HomeTemplate = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <HomeTemplateStyle>
      {(isLargeScreen || isSidebarOpen) && <SideBar onClose={toggleSidebar} />}

      <section className="dashboard">
        <Header openSidebar={toggleSidebar} />

        <div className="main-content">
          <DashboardSummary />
          <div className="dashboard-chart__container">
            <RevenueChart />
            <CustomerChart />
          </div>
          <div className="customer-list__container">
            <CustomerMap />
            <CustomerList />
          </div>
          <Menu />
        </div>
      </section>
    </HomeTemplateStyle>
  );
};

export default HomeTemplate;
