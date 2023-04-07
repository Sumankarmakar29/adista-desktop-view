import React from "react";
import "../App.css";
import target from "../icons/target-goals-icon.png";
import target1 from '../icons/reainbow-icon.png'
import target2 from '../icons/writer-blogger-author-female-icon.png'
import target3 from '../icons/thumbtack-icon.png'
function LandingPage() {
  return (
    <div className="container">
      <section className="mt-2">
        <div className="div6 ">
          <h3 className="tag">Why the Industry Chooses Clickdee?</h3>
          <p className="content">
            We Understand Perfomance marketing from every angle and every stage
            of the funnel.Our client trust that we know what matrics move there
            buisness towards growth.Our publisher and affliate partner know that
            we make maximum revenue and ROAS a main focus when growing our
            partnerships
          </p>
        </div>
        <div className="div1 para shadow-lg bg-white rounded">
          <img className="image" src={target} />
          <h2>Choose Your Local Targeting</h2>{" "}
          <p className="hide">
            Our targeted and tracked calls are tailored to your buisness
            need,audience and geolocation.
          </p>
        </div>
        <div className="div2 para shadow-lg bg-white rounded">
          <img className="image" src={target} /> <h2>Track Your Conversion</h2>
          <p className="hide">
            We use the most progressive tracking and analytics to ensure that
            every call cam be tracked and evaluated.
          </p>
        </div>
      </section>
      <section>
        <div className="div3 para shadow-lg bg-grey rounded">
          <img className="image" src={target1} />
          <h2>Customized Campign</h2>
          <p className="hide">
            Audiences,budgets and goals : you decide the creteria for your
            digital ad campaign,and we'll do the rest.
          </p>
        </div>
        <div className="div4 para shadow-lg bg-white rounded">
          <img className="image" src={target2} />
          <h2>Get Dedicated Team Support</h2>
          <p className="hide">
            We constantly monitor quality control! Our affiliate network of
            publishers are digital ad experts that have been vetted.
          </p>
        </div>
        <div className="div5 para shadow-lg bg-white rounded">
          <img className="image" src={target3} />
          <h2>Quality assurance</h2>
          <p className="hide">
            We constantly monitor quality control! Our affiliate network of
            publishers are digital ad experts that have been vetted.
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;

{
  /* <p className='content'>We Understand Perfomance marketing from every angle and every  stage of the funnel.Our client trust that we know what matrics move there buisness towards growth.Our publisher and affliate partner know that we make maximum revenue and ROAS a main focus when growing  our partnerships</p> */
}
