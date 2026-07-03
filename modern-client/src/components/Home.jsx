import React from 'react';
import Banner from './Banner';
import About from './HomeComponents/About';
import StatsSection from './HomeComponents/StatsSection';
import DepartmentsSection from './HomeComponents/DepartmentsSection';
import FacultyShowcase from './HomeComponents/FacultyShowcase';
import OurProgram from './HomeComponents/OurProgram';
import ChooseUs from './HomeComponents/ChooseUs';
import TestimonialSection from './HomeComponents/TestimonialSection';
import Events from './HomeComponents/Events';
import LatestNews from './HomeComponents/LatestNews';
import ImgBar from './HomeComponents/ImgBar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <StatsSection />
            <DepartmentsSection />
            <FacultyShowcase />
            <OurProgram></OurProgram>
            <ChooseUs></ChooseUs>
            <TestimonialSection />
            <Events></Events>
           <LatestNews></LatestNews>
           <ImgBar></ImgBar>
        </div>
    );
};

export default Home;