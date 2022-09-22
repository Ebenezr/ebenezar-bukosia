import { Link } from "react-scroll";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import mockup from "./assets/mockup.png";
import react from "./assets/react.png";
import rails from "./assets/rails.png";
import ts from "./assets/ts.png";
import ruby from "./assets/ruby.png";
import sass from "./assets/sass.png";
import js from "./assets/javascript.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";

interface AppPProps {}
const App: React.FC<{ name?: string }> = () => {
  return (
    <main>
      <header className="main-header">
        <nav>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-250}
            spy={true}
            className="nav-links"
          >
            ABOUT
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
            className="nav-links"
          >
            SKILLS
          </Link>
          <Link
            to="work"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
            className="nav-links"
          >
            WORK
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            className="nav-links"
          >
            CONTACT
          </Link>
        </nav>
        <header>
          <h1 className="logo-title">EBENEZAR BUKOSIA</h1>
        </header>
      </header>
      <section className="about" id="about">
        <header>
          <small className="section-name">About</small>
          <h1 className="section-title">Software Engineer</h1>
        </header>
        <p>
          I am an aspiring developer from Nairobi Kenya.Currently a student at
          Moringa School enrolled in Full stack web development pathway.
        </p>
      </section>
      <section className="skills" id="skills">
        <header>
          <small className="section-name">SKILLS</small>
          <h2 className="section-title">I have a wide range of skills</h2>
        </header>
        <article className="content">
          <div className="list-skills">
            <div className="skill-card">
              <small>React</small>
              <img src={react} alt="" />
              <ProgressBar
                isLabelVisible={false}
                completed={90}
                width="100%"
                customLabel=""
                height="5px"
                bgColor="#00d1f7"
                baseBgColor="rgb(39, 39, 39)"
              />
            </div>
            <div className="skill-card">
              <small>Sass</small>
              <img src={sass} alt="" />
              <ProgressBar
                isLabelVisible={false}
                completed={95}
                width="100%"
                customLabel=""
                height="5px"
                bgColor="#c76395"
                baseBgColor="rgb(39, 39, 39)"
              />
            </div>
            <div className="skill-card">
              <small>Ruby On Rails</small>
              <img src={rails} alt="" />
              <ProgressBar
                isLabelVisible={false}
                completed={95}
                width="100%"
                customLabel=""
                height="5px"
                bgColor="#a62c46"
                baseBgColor="rgb(39, 39, 39)"
              />
            </div>
            <div className="skill-card">
              <small>Javascript</small>
              <img src={js} alt="" />
              <ProgressBar
                isLabelVisible={false}
                completed={75}
                width="100%"
                customLabel=""
                height="5px"
                bgColor="#efd81d"
                baseBgColor="rgb(39, 39, 39)"
              />
            </div>

            <div className="skill-card">
              <small>Typescript</small>
              <img src={ts} alt="" />
              <ProgressBar
                isLabelVisible={false}
                completed={70}
                width="100%"
                customLabel=""
                height="5px"
                bgColor="#2f74c0"
                baseBgColor="rgb(39, 39, 39)"
              />
            </div>
            <div className="skill-card">
              <small>Ruby</small>
              <img src={ruby} alt="" />
              <ProgressBar
                isLabelVisible={false}
                completed={80}
                width="100%"
                customLabel=""
                height="5px"
                bgColor="#da0c00"
                baseBgColor="rgb(39, 39, 39)"
              />
            </div>
          </div>
        </article>
      </section>
      <section className="work" id="work">
        <header>
          <small className="section-name">Work</small>
          <h2 className="section-title">
            Hand-picked projects for you to see.
          </h2>
        </header>
        <article className="content">
          <div className="navigation">
            <motion.button
              className="btn nav-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoIosArrowBack className="nav-icons" />
            </motion.button>
            4
            <motion.button
              className="btn nav-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoIosArrowForward className="nav-icons" />
            </motion.button>
          </div>
          <div className="project-wrapper">
            <h3 className="project-name">Clock-me</h3>
            <small>Time card application</small>
            <p>
              Clock-me is a web application helps to solve the problem of
              tracing employees working time. This can be very essential
              espesialy jobs that pays thier employees on hourly basis. the
              application is also beneficial to a any company since it enables
              them track thier working times of thier employees and know how to
              optimize make thiem efficient. the application solve this such as
              recoding each day's clock-in and clock-out timestamp and record it
              in the database as string array. the application then uses the
              timestamps to calculate how many hours the employee has been
              working and compute the employees salary.
            </p>
            <motion.button
              className="btn btn-main"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View project
            </motion.button>
            <div className="project-poster">
              <img src={mockup} alt="" />
            </div>
          </div>
        </article>
      </section>
      <section className="contact" id="contact">
        <header>
          <small className="section-name">Contact</small>
          <h2 className="section-title">
            Intrested in working with me or perhaps just talk?
          </h2>
        </header>
        <div className="content">
          <p>
            Reach me on social media or by sending an email to
            ebenezarbukosia@gmail.com
          </p>
          <motion.button
            className="btn btn-main"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get in touch
          </motion.button>
        </div>
      </section>
      <footer className="footer">
        <h3>Ebenezar Bukosia Portfolio---©2022</h3>
        <h4>Github---Ebenezr</h4>
      </footer>
    </main>
  );
};

export default App;
