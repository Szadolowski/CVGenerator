import "./App.css";

function App() {
  return (
    <section className="CVSection">
      <button
        onClick={() => {
          window.print();
        }}
      ></button>
      <section className="CV">
        <nav className="permanentInformation">
          <h1>Rafał Curzydło</h1>
          <h2>FrontEnd Developer</h2>
          <br />
          <div className="personalData">
            <h3>Personal Data</h3>
            <hr />
            <div className="personalDataText" id="name">
              <img src="person.svg" alt="Name: " height="20px" width="20px" />
              Rafał Curzydło
            </div>
            <div className="personalDataText" id="mail">
              <img src="mail.svg" alt="mail: " height="20px" width="20px" />
              <a href="mailto:rafallcurzydlo.biz@gmail.com">
                rafallcurzydlo.biz@gmail.com
              </a>
            </div>
            <div className="personalDataText" id="number">
              <img
                src="phone.svg"
                alt="phoneNumber: "
                height="20px"
                width="20px"
              />
              <a href="tel:+48792802918">+48 792 802 918</a>
            </div>
            <div className="personalDataText" id="adress">
              <img src="home.svg" alt="Adress: " height="20px" width="20px" />
              <address>
                Słopnice 956 <br /> 34-615 Słopnice
              </address>
            </div>
            <div className="personalDataText" id="drivingLicense">
              <img
                src="car.svg"
                alt="Driving License: "
                height="20px"
                width="20px"
              />
              Kat. B
            </div>
            <div className="personalDataText" id="linkedIn">
              <img
                src="linkedIn.svg"
                alt="LinkedIn: "
                height="20px"
                width="20px"
              />
              <a href="https://www.linkedin.com/in/rafalcurzydlo">
                linkedin.com/in/rafalcurzydlo
              </a>
            </div>
            <div className="personalDataText" id="web">
              <img src="web.svg" alt="Web: " height="20px" width="20px" />
              <a href="https://github.com/Szadolowski">
                github.com/Szadolowski
              </a>
            </div>
          </div>
          <div className="language">
            <h3>Languages</h3>
            <hr />
            <div className="languageText" id="polish">
              <b>Polish</b>
              <div className="languageDot">
                <img src="dotBlue.svg" />
                <img src="dotBlue.svg" />
                <img src="dotBlue.svg" />
                <img src="dotBlue.svg" />
                <img src="dotBlue.svg" />
              </div>
            </div>
            <div className="languageText" id="english">
              <b>English</b>
              <div className="languageDot">
                <img src="dotBlue.svg" />
                <img src="dotBlue.svg" />
                <img src="dot.svg" />
                <img src="dot.svg" />
                <img src="dot.svg" />
              </div>
            </div>
          </div>
        </nav>
        <section className="variableInformation">
          <div>
            <div className="education">
              <h3>Education</h3>
              <hr />
              <div className="educationText">
                <div className="educationPlace">
                  <h4>Technikum Informatyczne</h4>
                  <h5>09.2019 - 04.2024</h5>
                </div>
                <p>
                  Zespół Szkół Technicznych i Ogólnokształcacych im. Jana Pawła
                  II, Limanowa
                </p>
                <span>
                  Kwalifikacja zawodowa: <br /> • <b>INF.02.</b> Administracja i
                  eksploatacja systemów komputerowych, urządzeń peryferyjnych i
                  lokalnych sieci komputerowych <br /> • <b>INF.03.</b>{" "}
                  Tworzenie i administrowanie stronami i aplikacjami
                  internetowymi oraz bazami danych <br /> • <b>IT Essentials</b>
                </span>
              </div>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <hr />
              <h5>
                • HTML <br />
                • CSS <br />
                • Java Script <br />
                • React.js <br />
                • TypeSctipr <br />
                • GIT <br />• Visual Studio Code
              </h5>
            </div>
          </div>
          <footer>
            Wyrażam zgodę na przetwarzanie moich danych osobowych w zakresie
            obecnych i przyszłych procesów rekrutacyjnych. / I consent to the
            processing of my personal data for the purpose of recruitment for
            the position to which I am applying.
          </footer>
        </section>
      </section>
    </section>
  );
}

export default App;
