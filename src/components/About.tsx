import styles from "./About.module.css";
import jeffImg from "./assets/jeffrey.png"
import {Link} from "react-router-dom";
const About: React.FC = () => {
    const skills = [
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'HTML',
        'CSS',
    ];

    return (
        <div className={styles.aboutContainer}>

            <h1 className = {styles.heading}>About Me</h1>

            <div className={styles.aboutContent}>
                <div className={styles.profileImage}>
                    <img src={jeffImg} alt="Profile" />
                </div>
                <div className={styles.profileInfo}>
                    <p className = {styles.text}>
                        My name is Jeffrey Li and I am a third year at Worcester Polytechnic Institute majoring in Computer Science and Math. My Computer science interests include Software Engineering, System Design and Artificial Intelligence.
                    </p>
                    <p  className = {styles.text}>
                        Outside of academics, I am an avid runner and  <Link to="/speedcubing" className={styles.btnPrimary}>
                        speedcuber
                    </Link>
                    </p>

                    <div className={styles.skillsList}>
                        <h3 className = {styles.text}>Skills</h3>
                        <ul  className = {styles.text}>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;