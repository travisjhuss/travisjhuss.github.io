function Chef({openLink}) {

  return (
    <div className="work-text">
      <h3>The Condescending Chef</h3>
      <p>Duration: 2 Week Sprint with 1 Week Scoping</p>
      <p>
        Most of us rely on the internet as a way to get recipes. Many of us just
        want a simple recipe and end up spending half an hour looking through
        food blog after food blog only to settle on a recipe that doesn't
        deliver at the end.
      </p>
      <p>
        Thats where my idea for an app came from. An app built for professional
        chefs to give feedback to everyday home cooks on recipes they find
        online, or even their own personal recipes. The app is built with React,
        Redux, Node, Express, PostgreSQL, and Material UI.
      </p>
      <div className="mobile-btn">
        <button
          className="work-btn"
          onClick={() =>
            openLink(
              'https://github.com/travisjhuss/the-condescending-chef'
            )
          }
        >
          Github
        </button>
      </div>
    </div>
  );
}

export default Chef;
