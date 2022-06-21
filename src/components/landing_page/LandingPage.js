import Navbar from "../navbar/Navbar";
import "./landing.css";


const LandingPage = () => {
  return (
    <>
      {/* Navbar */}
      <div  className='landing__body'>

      <Navbar />

      {/* Content */}
     

      <div className="landing__container">
        <div className="landing__background"></div>

        <div className="landing__content">
          <div className="landing__title">
            <h2 className='create'>Create.</h2>
            <h2 className='organize'>Organize.</h2>
            <h2 className="easy">Easy</h2>
          </div>

          <div className="landing__desc">
            <p>
              Notes is the best place to jot down quick thoughts or to save
              longer notes filled with checklists, images or links.
            </p>
          </div>
        </div>
      </div>

      </div>
     
    </>
  );
};

export default LandingPage;
