import React from 'react'
import Banner from '../components/Banner'
import MockupZones from '../components/MockupZones'
import RecentWorks from '../components/RecentWorks'

const Home = () => {
  return (
    <div className="h-[100vh] relative flex flex-col justify-between">
      <MockupZones />
      <RecentWorks />
      {/* <Banner/> */}
    </div>
  );
}

export default Home
