function App() {
  return (
    <main>
      <header>
        <nav>
          <h2>00 ABOUT</h2>
          <h2>01 SKILLS</h2>
          <h2>02 EXP</h2>
          <h2>03 CONTACT</h2>
        </nav>
      </header>
      <section className="about">
        <header>
          <h1 className="section-title">EBENEZAR BUKOSIA</h1>
        </header>
      </section>
      <section className="skills">
        <header>
          <h1 className="section-title">SKILLS</h1>
        </header>
        <article className="content">
          <p>I have a wide range of skills</p>
          <div className="list-skils">
            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>CSS</li>
              <li>Sass</li>
            </ul>
            <ul>
              <li>Ruby On Rails</li>
              <li>Ruby</li>
              <li>SQL</li>
              <li>Tailwind</li>
              <li>ES6</li>
              <li>Node</li>
            </ul>
          </div>
        </article>
      </section>
      <section className="exp">
        <header>
          <small className="section-name">Work</small>
          <h2 className="section-title">
            Hand-picked projects for you to see.
          </h2>
        </header>
        <article className="content">
          <div className="navigation">
            <button className="btn"></button>
            <button className="btn"></button>
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
          <div className="project-poster"></div>
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
