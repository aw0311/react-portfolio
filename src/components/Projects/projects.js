import './projects.scss'
import snakeImage from '../../components/Projects/SnakeGameImage.png'
import spreadsheet from '../../components/Projects/spreadsheet.jpg'
import spriteEditor from '../../components/Projects/Spriterecording-ezgif.com-video-to-gif-converter.gif'
import databaseGIF from '../../components/Projects/database recording.gif'
import gradingGIF from '../../components/Projects/grading recording.gif'
import numericalGIF from '../../components/Projects/education recording.gif'
import { useEffect } from 'react'

const Projects = () => {
    
    useEffect(() => {
            document.title = "Adam's Portfolio | Projects";
        }, []);

    return (
        <div className="projects-page">
            <div className="content-container">
                <div className="title-zone">
                    <h1>Projects</h1>
                    <p><a className="resume-link" href='https://docs.google.com/document/d/1cYFQ1aBE5ee616mAqB82JeHgxt3QnVc-jfJYV3jJvQI/edit?tab=t.0' target='blank'>Resume</a></p>
                </div>

                <div className="project-zone">
                    <div className="project-zone-1">
                        <div className="project">
                            <div className="description">
                                <h2>Sprite Editor</h2>
                                <ul>
                                    <li>
                                        <strong>Team Project</strong>
                                    </li>
                                    <li>
                                        <a href="https://github.com/aw0311/SpriteEditor" target="_blank">View Code</a>
                                    </li>
                                    <li>Collaborated with a <strong>team of six </strong> 
                                        to develop a <strong>Sprite Editor </strong> that supports 
                                        <strong> pixel-level drawing and animation </strong>. 
                                        Added tools including <strong>mirror </strong>, <strong>rectangle </strong>, 
                                        and <strong>ellipse </strong> to enhance the editing experience. 
                                        Implemented functionality for <strong>saving and loading sprites </strong> 
                                        to support continued editing and reuse.
                                    </li>
                                    <li>
                                        Utilized <strong>C++</strong> and <strong>Qt</strong> for this project.
                                    </li>
                                </ul>
                            </div>
                            <div className="image">
                                <img src={spriteEditor} alt="Sprite Editor Gif" />
                            </div>
                        </div>
                        <div className="project">
                            <div className="description">
                                <h2>Grading Application</h2>
                                <ul>
                                    <li>
                                        <strong>Solo Project</strong>
                                    </li>
                                    <li>
                                        <a href="https://github.com/aw0311/GradingApplication" target="_blank">View Code</a>
                                    </li>
                                    <li>Developed a web application that facilitates <strong>assignment submission </strong> and grading for
                                        students, teachers, and teaching assistants. Implemented <strong>role-based authentication </strong>
                                        to ensure secure access, allowing only authorized users (students, teachers, and TAs) 
                                        to log in. The platform features <strong>dynamic content rendering </strong> based on user roles, enabling 
                                        students to submit assignments and view grades, while teachers and TAs can evaluate submissions 
                                        and manage grading.
                                    </li>
                                    <li>
                                        Utilized <strong>Python/Django, Javascript, HTML, CSS </strong> and <strong>VSCode </strong> for this project.
                                    </li>
                                </ul>
                            </div>
                            <div className="image">
                                <img src={gradingGIF} alt="Grading Application" />
                            </div>
                        </div>
                        <div className="project">
                            <div className="description">
                                <h2>Networking Snake Game</h2>
                                <ul>
                                    <li>
                                        <strong>Duo Project</strong>
                                    </li>
                                    <li>Developed a <strong>multiplayer</strong> Snake game with power-ups for growth, 
                                        where players compete in real-time. Collisions with walls or other 
                                        players result in elimination.
                                    </li>
                                    <li>
                                    The server was built for our system, sending the world state in <strong>JSON </strong>
                                    format for snakes, power-ups, and walls, which we used to <strong>render</strong> the world.
                                    </li>
                                    <li>
                                        Utilized <strong>C#</strong> and <strong>Blazor</strong> for this project as well as 
                                        <strong> SSMS</strong> to keep track of high scores.
                                    </li>
                                </ul>
                            </div>
                            <div className="image">
                                <img src={snakeImage} alt="Snake Game" />
                            </div>
                        </div>
                    </div>
                    <div className="project-zone-1">
                        <div className="project">
                            <div className="description">
                                <h2>Video Game Database App</h2>
                                <ul>
                                    <li>
                                        <strong>Personal Project</strong>
                                    </li>
                                    <li>
                                        <a href="https://aw0311.github.io/videogame-db-app/" target="_blank">View Site</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/aw0311/videogame-db-app" target="_blank">View Code</a>
                                    </li>
                                    <li>Developed a dynamic database-driven application that allows users to <strong>search </strong> 
                                        for video games and view relevant results in real time. Selecting a game from 
                                        the search results displays a <strong>detailed information page </strong> with statistics such as ratings, 
                                        supported platforms, and a comprehensive description. The search feature also includes 
                                        <strong> intelligent suggestions </strong> to enhance user experience and efficiency.
                                    </li>
                                    <li>
                                        Utilized <strong>Javascript</strong> and <strong>ReactJS</strong> for this project.
                                    </li>
                                </ul>
                            </div>
                            <div className="image">
                                <img src={databaseGIF} alt="Video Game Database Application" />
                            </div>
                        </div>
                        <div className="project">
                            <div className="description">
                                <h2>Numerical Conversion Application</h2>
                                <ul>
                                    <li>
                                        <strong>Team Project</strong>
                                    </li>
                                    <li>Built an educational app to <strong>teach decimal, binary, and hexadecimal conversions </strong>
                                        through six <strong>interactive modules</strong>. Included immediate feedback with <strong>sound effects </strong>,
                                        and unlocked a <strong>certificate of completion </strong> upon finishing all modules which can be <strong>saved </strong>
                                        on the device using <strong>JSON</strong>.
                                    </li>
                                    <li>
                                        Utilized <strong>C++</strong> and <strong>QT</strong> for this project.
                                    </li>
                                </ul>
                            </div>
                            <div className="image">
                                <img src={numericalGIF} alt="Numerical Conversion Application" />
                            </div>
                        </div>
                        <div className="project">
                            <div className="description">
                                <h2>Spreadsheet Application</h2>
                                <ul>
                                    <li>
                                        <strong>Duo Project</strong>
                                    </li>
                                    <li>Developed a spreadsheet application which includes <strong>interactive </strong> 
                                        cells that could receive formulas, numbers or strings. Also implemented  
                                        <strong> arrow key </strong> navigation as
                                        an extra feature.
                                    </li>
                                    <li>
                                        Utilized <strong>C#</strong> and <strong>Blazor</strong> for this project.
                                    </li>
                                </ul>
                            </div>
                            <div className="image">
                                <img src={spreadsheet} alt="Spreadsheet Application" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Projects