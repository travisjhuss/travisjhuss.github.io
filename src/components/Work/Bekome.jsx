function Bekome({openLink}) {

  return (
    <div className="work-text">
      <h3>bekome</h3>
      <p>Duration: 2 Week Sprint with 1 Week Scoping</p>
      {/* <img
        src="./explore-view.png"
        alt="screen cap from bekome app"
        width="500"
      /> */}
      <p>
        Built as part of a client group project at Prime Digital Academy. Our
        clients wanted to address the difficulties of finding a therapist by
        creating an app similar to a dating app, such as Hinge. Clients and
        providers respectively set up their profiles with personal info,
        preferences, profile picture, and more. Then clients are able to browse
        and filter through providers and communicate with the ones who seem like
        a good fit.
      </p>
      <p>
        The app is built with React, Redux, Node, Express, PostgreSQL, Material
        UI, Socket.io, and Swiper. I personally worked on the backend code that
        handles the completed forms as well as styling on the front end.
      </p>
      <div className="mobile-btn">
        <button
          className="work-btn"
          onClick={() =>
            openLink(
              'https://github.com/travisjhuss/bekome-prime-group-project'
            )
          }
        >
          Github
        </button>
      </div>
    </div>
  );
}

export default Bekome;
