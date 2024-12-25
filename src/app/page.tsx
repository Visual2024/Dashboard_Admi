'use client';
import DashboardApp from '@/components/Dashboards/DashboardApp';
import Sidebar from '@/components/Dashboards/Sidebar';

export default function Home() {

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <DashboardApp />
      </div>
      <div className="shapes__one"></div>
      <div className="shapes__two"></div>
      <div className="shapes__three"></div>
    </>
  );
}

