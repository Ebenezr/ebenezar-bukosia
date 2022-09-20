import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import mockup from "./assets/mockupclock.png";
import react from "./assets/react.png";
import rails from "./assets/rails.png";
import ts from "./assets/ts.png";
import ruby from "./assets/ruby.png";
import sass from "./assets/sass.png";
import js from "./assets/javascript.png";
import ProgressBar from "@ramonak/react-progress-bar";
function App() {
  return (
    <main>
      <header className="main-header">
        <nav>
          <h2 className="nav-links">00 ABOUT</h2>
          <h2 className="nav-links">01 SKILLS</h2>
          <h2 className="nav-links">02 EXP</h2>
          <h2 className="nav-links">03 CONTACT</h2>
        </nav>
      </header>
      <section className="about">
        <header>
          <small className="section-name">About</small>
          <h1 className="section-title">EBENEZAR BUKOSIA</h1>
        </header>
      </section>
      <section className="skills">
        <header>
          <small className="section-name">SKILLS</small>
        </header>
        <article className="content">
          <p>I have a wide range of skills</p>
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
      <section className="work">
        <header>
          <small className="section-name">Work</small>
          <h2 className="section-title">
            Hand-picked projects for you to see.
          </h2>
        </header>
        <article className="content">
          <div className="navigation">
            <button className="btn nav-btn">
              <IoIosArrowBack />
            </button>
            4
            <button className="btn nav-btn">
              <IoIosArrowForward />
            </button>
          </div>
          <div className="project-wrapper">
            <h3 className="project-name">Clock-me</h3>
            <small>Time card application</small>
            <p>
              project description. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quisquam, ea.
            </p>
            <button className="btn btn-main">View project</button>
          </div>
          <div className="project-poster">
            <img src={mockup} alt="" />
          </div>
        </article>
      </section>
      <section className="contact">
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
          <button className="btn btn-main">Get in touch</button>
        </div>
      </section>
    </main>
  );
}

export default App;
