import './about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {useEffect} from 'react'


import band from '../../components/About/band.jpg'
import Ulogo from '../../components/About/Ulogo.jpeg'
import engagements from '../../components/About/engagements.jpg'
import BountifulLogo from '../../components/About/Bountiful_Logo.png'

const About = () => {

    useEffect(() => {
        document.title = "Adam's Portfolio | About Me";
        window.scrollTo(0, document.body.scrollHeight);
    }, []);

    return (
        <div className="about-page">
            <div className="content-container">
                <div className="text-zone">
                    <title>Adam's Portfolio</title>
                    <h1>About Me</h1>
                    <h2>Education</h2>
                    <ul>
                        <li>Senior at the University of Utah</li>
                        <li>Studying Computer Science with a minor in Mathematics</li>
                        <li>3.6 GPA</li>
                    </ul>
                    <h2>Personal Life</h2>
                    <ul>
                        <li>Married on July 22, 2024</li>
                        <li>Live in Bountiful, Utah</li>
                        <li>Lead Guitarist in my band titled Breakfast Biscuit &nbsp;
                            <a href="https://www.instagram.com/thebreakfastbiscuit/">
                            <FontAwesomeIcon icon = {faInstagram} color="#FFFF00" /></a></li> 
                        <li>Graduated from Bountiful High School in 2022</li>
                    </ul>
                </div>
                <div className="image">
                    <div className="image-left">
                        <img src={engagements} alt="My wife and I" />
                        <img src={band} alt="Breakfast Biscuit playing a show at Kilby Court" />
                    </div>
                    <div className="image-right">
                        <img src={Ulogo} alt="University of Utah logo" />
                        <img src={BountifulLogo} alt="Bountiful High School logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

