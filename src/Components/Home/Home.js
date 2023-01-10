import React from 'react';
import About from './About';
import Carousel from './Carousel';
import Offers from './Offers';
import Skills from './Skills';
import Stak from './Stak';
import VisaCard from './VisaCard';
import Banner from './Banner'
import OurPassion from './OurPassion';
import ClientSay from './ClientSay';
import Country from './Country';
import Expert from './Expert';
import FreeConsulation from './FreeConsulation';
import News from './News';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <VisaCard></VisaCard>
            <About></About>
            <Offers></Offers>
            <Skills></Skills>
            <Stak></Stak>
            <Banner></Banner>
            <OurPassion></OurPassion>
            <ClientSay></ClientSay>
            <Country></Country>
            <Expert></Expert>
            <FreeConsulation></FreeConsulation>
            <News></News>
        </div>
    );
};

export default Home;