// App.jsx using Fullpage.js and Tailwind for the UI

import ReactFullpage from "@fullpage/react-fullpage";
import IntroPage from "./components/IntroPage";
import "./index.css";

const anchors = ["intro", "skills", "projects", "roadmap"];

const App = () => {
  return (
    <>
      <ReactFullpage
        licenseKey={"A65MK-M52I6-641KK-JE4PH-ZPSWP"}
        scrollingSpeed={1000}
        anchors={anchors}
        navigation={true}
        navigationTooltips={anchors}
        controlArrowsHTML={[
          '<div class="fp-arrow"></div>',
          '<div class="fp-arrow"></div>',
        ]}
        render={() => {
          return (
            <>
              <IntroPage />
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
    </>
  );
};

export default App;

