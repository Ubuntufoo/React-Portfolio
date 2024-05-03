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
    sectionsColor={["#7fff00", "#00ffff", "#29ab87", "#476999"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section">
            <div className="slide"> Slide 11111111</div>
            <div className="slide"> Slide 22222222</div>
            <div className="slide"> Slide 3333333</div>
            <div className="slide "> Slide 4 4444444</div>
          </div>
          <div className="section">
            Section 2
          </div>
          <div className="section">
            Section 3
          </div>
          <div className="section">
            Section 4
          </div>
        </div>
      );
    }}
  />
);
export default App;
