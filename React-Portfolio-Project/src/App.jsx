//

import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";

const anchors = ["intro", "skills", "projects", "roadmap"];

const App = () => (
  <ReactFullpage
    licenseKey={"gplv3-license"}
    scrollingSpeed={10} /* Options here */
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    controlArrowsHTML={[
      '<div class="fp-arrow"></div>',
      '<div class="fp-arrow"></div>',
    ]}
    sectionsColor={["#7fff00", "#00ffff", "#29ab87", "#476999"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div className="text-center">
          <div className="section h-screen text-white">Intro</div>
          <div className="section">Skills</div>
          <div className="section">
            <div className="slide"> Projects 1</div>
            <div className="slide"> Projects 1.1</div>
            <div className="slide"> Projects 1.2</div>
            <div className="slide"> Projects 1.3</div>
          </div>
          <div className="section">Roadmap</div>
        </div>
      );
    }}
  />
);
export default App;
