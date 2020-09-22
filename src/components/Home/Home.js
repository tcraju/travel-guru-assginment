import React from 'react';
import Header from '../Header/Header';
import Place from '../Place/Place';
import './Home.css'

const Home = () => {
    return (
        <div className='home-bg'>
            <div className='color-shed'>
                <Header/>
                <Place/>
           </div>
        </div>
    );
};

export default Home;