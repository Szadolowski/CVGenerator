import "./App.css";

function App() {
  return (
    <section className="CV">
      <section className="information">
        <div className="aboutMe">
          <p>
            Frontend Developer specjalizujący się w HTML, CSS, JavaScript,
            React.js i TypeScript. Moją siłą jest uporczywość i determinacja w
            rozwiązywaniu problemów technicznych, co skutkuje tworzeniem
            efektywnych i nowoczesnych interfejsów użytkownika.
          </p>
        </div>
        <div className="language">
          <h3>LANGUAGE</h3>
          <div className="languageText">
            <h5>
              Polish(nativ) <br />
              <br />
              English(B2)
            </h5>
          </div>
        </div>
        <div className="softSkills">
          <h3>SOFT SKILLS</h3>
          <div className="softSkillsText">
            <h5>
              ■ Szybkość uczenia się <br />
              ■ Komunikatywność <br />
              ■ Zespołowość <br />
              ■ Rozwiązywanie konfliktów <br />
              ■ Chęć do nauki i samorozwoju <br />
            </h5>
          </div>
        </div>
        <div className="hobby">
          <h3>HOBBIES AND INTERESTS</h3>
          <div className="hobbyText">
            <h5>
              ■ Grafika <br />
              ■ Technologia <br />
              ■ Design <br />
              ■ Fotografia <br />
              ■ Książki <br />
              ■ Motoryzacja <br />
            </h5>
          </div>
        </div>
      </section>
      <section className="data">
        <div className="title">
          <h1>RAFAŁ </h1>
          <h1>
            <b>
              <i>CURZYDŁO</i>
            </b>
          </h1>
          <h2>Front End Developer</h2>
        </div>
        <div className="personalData">
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
              <p>
                Słopnice 956 <br /> 34-615 Słopnice
              </p>
            </address>
          </div>
          <div className="personalDataText" id="drivingLicense">
            <img
              src="car.svg"
              alt="Driving License: "
              height="20px"
              width="20px"
            />
            <p>Kat. B</p>
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
            <a href="https://github.com/Szadolowski">github.com/Szadolowski</a>
          </div>
        </div>
        <div className="education">
          <h3>Education</h3>
          <br />
          <div className="educationText">
            <div className="educationPlace">
              <h5>09.2019 - 04.2024</h5>
              <h4>Technikum Informatyczne</h4>
            </div>
            <p>
              Zespół Szkół Technicznych i Ogólnokształcacych im. Jana Pawła II,
              Limanowa
            </p>
            <div className="educationDescription">
              <span>Kwalifikacja zawodowa: </span>
              <br />
              <span>
                <b>INF.02: </b> Administracja i eksploatacja systemów
                komputerowych, urządzeń peryferyjnych i lokalnych sieci
                komputerowych
              </span>
              <br />
              <span>
                <b>INF.03: </b> Tworzenie i administrowanie stronami i
                aplikacjami internetowymi oraz bazami danych
              </span>
              <br />
              <span>
                <b>IT Essentials</b>
              </span>
            </div>
          </div>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <hr />
          <h5>
            HTML{" "}
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
              <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
              <path
                d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                fill="white"
              />
            </svg>
            <br />
            CSS{" "}
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
              <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
              <path
                d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                fill="white"
              />
            </svg>
            <br />
            JavaSctipt
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
              <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
            </svg>
            <br />
            React.js{" "}
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                fill="#53C1DE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                fill="#53C1DE"
              />
            </svg>
            <br />
            TypeSctipr{" "}
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>file_type_typescript_official</title>
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="1.312"
                fill="#3178c6"
              />
              <path
                d=" M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
                fill="#ffffff"
                fill-rule="evenodd"
              />
            </svg>
            <br />
            GIT{" "}
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z"
                fill="#000000"
              />
            </svg>
            <br />
            Visual Studio Code
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0016 3.11679C21.0016 2.23783 20.0175 2.23782 19.5801 2.34769C20.1924 1.86426 20.9105 1.98147 21.1656 2.12796L27.079 5.02747C27.6424 5.30375 27.9998 5.8786 27.9998 6.50857V25.5831C27.9998 26.2215 27.6329 26.8025 27.058 27.0743L21.4937 29.7054C21.1109 29.8701 20.2799 30.2767 19.5801 29.7053C20.4549 29.8702 20.9287 29.2476 21.0016 28.8264V3.11679Z"
                fill="url(#paint0_linear_87_8101)"
              />
              <path
                d="M19.6512 2.3319C20.1154 2.24017 21.0018 2.28271 21.0018 3.11685V9.68254L3.07359 23.2453C2.76022 23.4824 2.3192 23.443 2.05229 23.1542L0.204532 21.1548C-0.0849358 20.8416 -0.0646824 20.3513 0.249624 20.0633L19.5802 2.34775L19.6512 2.3319Z"
                fill="url(#paint1_linear_87_8101)"
              />
              <path
                d="M21.0018 22.3708L3.07359 8.80801C2.76022 8.57094 2.3192 8.61028 2.05229 8.8991L0.204532 10.8985C-0.0849358 11.2117 -0.0646824 11.702 0.249624 11.9901L19.5802 29.7056C20.455 29.8704 20.9289 29.2478 21.0018 28.8266V22.3708Z"
                fill="url(#paint2_linear_87_8101)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_87_8101"
                  x1="23.79"
                  y1="2"
                  x2="23.79"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#32B5F1" />
                  <stop offset="1" stop-color="#2B9FED" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_87_8101"
                  x1="21.0018"
                  y1="5.53398"
                  x2="1.0217"
                  y2="22.3051"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0F6FB3" />
                  <stop offset="0.270551" stop-color="#1279B7" />
                  <stop offset="0.421376" stop-color="#1176B5" />
                  <stop offset="0.618197" stop-color="#0E69AC" />
                  <stop offset="0.855344" stop-color="#0F70AF" />
                  <stop offset="1" stop-color="#0F6DAD" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_87_8101"
                  x1="1.15522"
                  y1="9.98389"
                  x2="21.0791"
                  y2="26.4808"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1791D2" />
                  <stop offset="1" stop-color="#1173C5" />
                </linearGradient>
              </defs>
            </svg>
            <br />
            Framer Motion
            <img
              src="fm.svg"
              alt="framer motion"
              height={"15px"}
              width={"15px"}
            />
          </h5>
        </div>
        <div className="workExperience">
          <h3>WORK EXPERIENCE</h3>
          <br />
          <div className="experienceText">
            <h4>Doświadczenie „półkomercyjne”</h4>
            <p>
              • Budowanie designów i aplikacji internetowych dla niekomercyjnych
              projektów społecznościowych
            </p>
            <p>• Tworzenie projektów szkolnych opartych na HTML, JS oraz CSS</p>
            <p>• Tworzenie storn na potrzeby własne dla rodziny i znajomych</p>
          </div>
        </div>
        <footer>
          I consent to the processing of my personal data for the purpose of
          recruitment for the position to which I am applying. /<br /> Wyrażam
          zgodę na przetwarzanie moich danych osobowych w zakresie obecnych i
          przyszłych procesów rekrutacyjnych.
        </footer>
      </section>
    </section>
  );
}

export default App;
