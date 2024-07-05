import styles from './HeroStyles.module.css';
import heroImg from '../../assets/assets/Hero-img.png';
import sun from '../../assets/assets/sun.svg';
import moon from '../../assets/assets/moon.svg';
import twitterLight from '../../assets/assets/twitter-light.svg';
import twitterDark from '../../assets/assets/twitter-dark.svg';
import githubLight from '../../assets/assets/github-light.svg';
import githubDark from '../../assets/assets/github-dark.svg';
import linkedinLight from '../../assets/assets/linkedin-light.svg';
import linkedinDark from '../../assets/assets/linkedin-dark.svg';
import CV from '../../assets/assets/documentorg.pdf';
import { useTheme } from '../../common/ThemeContext';



function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
          <><div className='row'>
            <div className="container"><marquee>
            <h3 className="text-center danger" >This Website is still in development!!!</h3></marquee>
    </div>
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Harris Johnsen" />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
          <h1>
            Y Manish Kumar Reddy

          </h1>
          <h2>Frontend Developer</h2>
          <span>
            <a href="https://x.com/Manish12c9" target="_blank">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/ManishinGithub1" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/yellaiah-gari-manish-kumar-reddy/" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </span>
          <p className={styles.description}>
            With a passion for developing modern React web apps for commercial
            businesses.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>

      </section>
      </div></>
  );
}

export default Hero;