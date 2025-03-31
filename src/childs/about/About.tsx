import './style.css';

export default function About() {
    return (
        <div className="about-me">
            {/* About Me Text Section */}
            <div className="about-me-text">
                <h1>So, Who Am I?</h1>
                <p>
                    Hey, I’m <strong>Piyush Bhatt</strong>, an entry-level software developer with a strong interest in 
                    <strong> AI, machine learning, and app development</strong>. I enjoy working on projects that combine 
                    logic with creativity—whether it’s building AI assistants like <strong>Veronica</strong>, developing 
                    Android apps, or experimenting with <strong>NLP and automation</strong>.
                </p>
                <p>
                    I’m always looking to <strong>learn, build, and improve</strong>, whether it’s coding from scratch or 
                    figuring out better ways to solve real-world problems. Outside of tech, you’ll find me exploring 
                    <strong> new music, gaming, or working on my personal projects</strong>.
                </p>
                <p>Let’s connect and talk tech (or music)! 🎵</p>
            </div>

            {/* Skills Section */}
            <div className="about-me-skills">
                <h2>My Skills</h2>
                <div className="skills-list">
                    <p><strong>Languages:</strong> Java, Python, JavaScript, HTML, CSS</p>
                    <p><strong>Frameworks:</strong> PyTorch, OpenCV, MERN Stack</p>
                    <p><strong>Databases:</strong> Firebase, MongoDB</p>
                    <p><strong>Tools:</strong> Android Studio, Pandas, NumPy, API Development</p>
                </div>
            </div>
        </div>
    );
}
