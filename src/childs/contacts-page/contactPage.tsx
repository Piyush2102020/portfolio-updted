import Contacts from '../../components/contacts/Contacts';
import './style.css';

export default function Contact() {
    return (
        <div className="contact-me">
            {/* Heading and Intro */}
            <div className="contact-header">
                <h1>Let's Connect!</h1>
                <p>Got a project idea, collaboration opportunity, or just want to talk tech? Feel free to reach out!</p>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
                <form>
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" required />

                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />

                    <label>Message</label>
                    <textarea placeholder="Write your message..." required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>

            {/* Contact Details & Social Links */}
            <div className="contact-info">
                  <Contacts/>
            </div>
        </div>
    );
}
