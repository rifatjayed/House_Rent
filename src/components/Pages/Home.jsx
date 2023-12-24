import React from 'react';
import Banner from '../Banner';
import HouseList from '../HouseList';

const Home = () => {
    return (
        <div className='min-h-[1800px]'>
           <Banner></Banner>
           <HouseList>    </HouseList>
        </div>
    );
};

export default Home;