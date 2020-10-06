import React from 'react';

export default function MainPoster() {
  return (
    <div>
      <div className="section1">
        <img src="/assets/bgtop.png" className="splash" alt="" />
        <div className="section1__container flex">
          <div className="flex">
            <h1 className="logo">Unify. </h1>
            <span className="tag">An Assembly of Leading Industry Events</span>
          </div>
          <div className="screenContainer" style={{ alignSelf: 'flex-end' }}>
            <span className="url">www.unifyhybrid.com</span>
            <img src="/assets/screenshot.gif" alt="" />
          </div>
        </div>
      </div>
      <div className="section2">
        <h2>Launching October 2020</h2>
      </div>
      <div className="section3">
        <div className="section1__container">
          <div className="section3__container">
            <h3>We build amazing tools to help events grow. </h3>
            <p>We’ve been busy designing and building innovative tools to help events continue to thrive and grow for years
              to
              come.
              Our goal is help events supplement
              traditional sales with digital solutions
              to increases their bottom line.
            </p>
            <p>Launching October 2020.</p>
          </div>
        </div>
      </div>
    </div>

  );
}
