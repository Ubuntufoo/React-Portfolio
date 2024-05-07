// App.jsx using Fullpage.js and Tailwind for the UI

import ReactFullpage from "@fullpage/react-fullpage";
// import Intro from "./components/Intro";
import "./index.css";

//enable keyboard scrolling for up, down, left, right
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    window.fullpage_api.moveSectionUp();
  } else if (e.key === "ArrowDown") {
    window.fullpage_api.moveSectionDown();
  } else if (e.key === "ArrowLeft") {
    window.fullpage_api.moveSlideLeft();
  } else if (e.key === "ArrowRight") {
    window.fullpage_api.moveSlideRight();
  }
}
);

const anchors = ["intro", "skills", "projects", "roadmap"];

const App = () => (
  <ReactFullpage
    licenseKey={"gplv3-license"}
    scrollingSpeed={1000}
    anchors={anchors}
    navigation={true}
    navigationTooltips={anchors}
    controlArrowsHTML={[
      '<div class="fp-arrow"></div>',
      '<div class="fp-arrow"></div>',
    ]}

    // eslint-disable-next-line no-unused-vars
    render={() => {
      return (
        <>

          <div className="section h-screen">Skills</div>
          <div className="section h-screen">
            <div className="slide"> Projects 1</div>
            <div className="slide"> Projects 1.1</div>
            <div className="slide"> Projects 1.2</div>
            <div className="slide"> Projects 1.3</div>
          </div>
          <div className="section h-screen">Roadmap</div>
        </>
      );
    }}
  />
);
export default App;
