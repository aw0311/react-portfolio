import { Link } from "react-router-dom"
import './home.scss'
import {useEffect} from 'react'

import selfie from '../../components/Home/selfie.jpg'

const Home = () => {

    useEffect(() => {
        document.title = "Adam's Portfolio | Home";
        window.scrollTo(0, document.body.scrollHeight);
    }, []);

    return (
        <div className="home-page">
            <div className="content-container">
                <div className="text-zone">
                    <h1>Hi, <br /> I'm
                    Adam Wheeler
                    <br />
                    Software Engineer
                    </h1>
                    <h2>Computer Science Student / University of Utah</h2>
                    <br />
                    <div className="home-buttons">
                        <Link to ="/contact" className='flat-button'>CONTACT ME</Link>
                        <Link to ="/projects" className='flat_button'>VIEW PROJECTS</Link>
                    </div>
                </div>
                <div className="image">
                    <img src={selfie} alt="Myself" />
                </div>
            </div>
        </div>
    )
}

export default Home