export default function Top({mobile}) {
    return(
        <div className="top">
        <div className="name">TRAVIS J HUSS</div>
        <div className="job-title">Full Stack Software Engineer</div>
        <img
          src="./mill-city-museum.png"
          // width="530"
          alt="mill city museum in black and white"
          className="cover-photo"
        />
        {mobile && (
          <div className="scroll-text-mobile">
            <p className="scroll-word">Scroll</p>
            <p className="scroll-word">For</p>
            <p className="scroll-word">More</p>
          </div>
        )}
      </div>
    )
}