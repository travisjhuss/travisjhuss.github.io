function Movie({openLink}) {

  return (
    <div className="work-text">
      <h3>The Travis Movie Database (TMDb)</h3>
      <p>Duration: 48 Hour Sprint</p>
      <p>
        TMDb is a simple movie organization app built using React, Redux, and
        Material UI. Users can upload movie posters with details about the
        movie. Their library of movies is displayed with their respective
        posters that can be clicked on to view more details. Users can also use
        a search function to easily find what they are looking for.
      </p>
      <div className="mobile-btn">
        <button
          className="work-btn"
          onClick={() =>
            openLink(
              'https://github.com/travisjhuss/movie-collection'
            )
          }
        >
          Github
        </button>
      </div>
    </div>
  );
}

export default Movie;
