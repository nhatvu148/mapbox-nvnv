import React from "react";
import _ from "lodash";
import MapPage from "components/MapPage";
import useComponentSize from "hooks/useComponentSize";
import useWindowSize from "hooks/useWindowSize";

const LAYOUT = {
  "metric-v-target-users": { h: 6, md: 4 },
  "metric-v-target-sessions": { h: 6, md: 4 },
  "metric-v-target-pageviews": { h: 6, md: 4 },
  "analytics-audience-metrics": { h: 9, minH: 7 },
  "traffic-channels": { md: 6, h: 6 },
  sessions: { md: 6, h: 6, maxH: 9, minW: 3 },
  spend: { md: 6, h: 7 },
  "website-performance": { md: 6, h: 11 },
  "organic-traffic": { md: 6, h: 10 }
};

export class Mapbox extends React.Component {
  state = {
    layouts: _.clone(LAYOUT)
  };

  _resetLayout = () => {
    this.setState({
      layouts: _.clone(LAYOUT)
    });
  };

  render() {
    return (
      <div
        style={{ height: "600px", position: "relative" }}
        // ref={contentRef}
      >
        <MapPage />
      </div>
    );
  }
}
