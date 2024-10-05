import React from 'react'
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Project from './Project';
import Course from './Course';
import Contact from "./Contact"
import Footer from '../../components/Footer';
import LeftSider from './LeftSider';

function Home() {
    
    const {portfolioData} = useSelector((state)=> state.root)
    
    return (
        <div>

            <Header />
            {portfolioData && (
                <div className='bg-primary px-40 sm:px-5 md:10px'>
                <Intro />
                <About/>
                <Experience/>
                <Project/>
                <Course/>
                <Contact/>
                <Footer/>
                <LeftSider/>
            </div>
            )}
        </div>
    );
}
export default Home