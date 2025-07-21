import './contact.scss'
import {useEffect} from 'react'

const Contact = () => {

    useEffect(() => {
            document.title = "Adam's Portfolio | Contact";
    }, []);

    return (
        <div className="contact-page">
            <div className="content-container">
                <div className="text-zone">
                    <h1>Contact</h1>
                    <h2>Phone</h2>
                    <p>385-528-9236</p>
                    <h2>Email</h2>
                    <p><a href="mailto:adamwheeler70@gmail.com">adamwheeler70@gmail.com</a></p>
                </div>
                    
            </div>
        </div>
    )
}

export default Contact