import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">
            <header>
                <h1>Welcome to Timely Tasks!</h1>
                <p>Stay organized, manage your time effectively, and accomplish your goals with our intuitive task management app.</p>
            </header>
            <section className="features-section">
                <h2>Key Features</h2>
                <ul>
                    <li>Time Tracking</li>
                    <li>Scheduling</li>
                    <li>Reminders</li>
                    <li>Collaboration Tools</li>
                </ul>
            </section>
            <section className="get-started-section">
                <h2>Get Started</h2>
                <p>Sign in or create an account to start managing your tasks efficiently.</p>
                <Link to="/" className="button">Home</Link>
                <Link to="/login" className="button">Login</Link>
                <Link to="/signup" className="button">Sign Up</Link>
            </section>
            <section className="why-choose-section">
                <h2>Why Choose Timely Tasks?</h2>
                <ul>
                    <li>User-friendly interface</li>
                    <li>Customizable features</li>
                    <li>Seamless integration with other tools</li>
                    <li>Reliable support and updates</li>
                </ul>
            </section>
            <footer>
                <nav>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                    </ul>
                </nav>
                <div className="social-links">
                    <a href="https://twitter.com/timelytasks" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/timelytasks" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/timelytasks/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </footer>
        </div>
    );
}
