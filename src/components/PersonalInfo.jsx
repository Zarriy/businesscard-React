function PersonalInfo() {
  return (
    <div className="p-info">
      <div className="name-box">
        <h1>Zarriy Mian</h1>
        <p>Frontend-Developer</p>
        <a href="https://zarriy.com/" target="_blank">
          Zarriy.com
        </a>
        <div className="btn-div">
          <button className="btn-primary email-btn">
            <span>
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            Email
          </button>
          <button className="btn-primary twitter-btn">
            <span>
              <ion-icon name="logo-linkedin"></ion-icon>
            </span>
            LinkedIn
          </button>
        </div>
      </div>
      <div className="about-sec">
        <h2>About</h2>
        <p>
          I am Frontend Developer. I love creating stunning web pages and apps.
          My fav language is JS and this project is developed using ReactJS. I
          try to keep on learning new things and keep myself up with best
          practices.
        </p>
      </div>
      <div className="about-sec">
        <h2>Interests</h2>
        <p>
          Sci-fic Movies, Philosophy Books, Traveling, Romantic Music, Art
          Desings, Explorer of the world
        </p>
      </div>

      <footer>
        <a href="https://github.com/Zarriy" target="_blank">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://twitter.com/Zawxii" target="_blank">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </footer>
    </div>
  );
}
export default PersonalInfo;
