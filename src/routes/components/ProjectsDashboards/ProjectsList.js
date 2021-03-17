import React from "react";
import faker from "faker/locale/en_US";
import PropTypes from "prop-types";

import { Badge } from "components";

const ProjectsList = (props) => (
  <React.Fragment>
    <div className="d-flex flex-column">
      <div className="mb-3 d-flex justify-content-between">
        <span className="mb-0 text-inverse">
          {props.title || faker.commerce.productName()}
        </span>
        <Badge color={`${props.badgeColor}`} pill className="align-self-center">
          {props.badgeTitle}
        </Badge>
      </div>
      <div className="d-flex justify-content-between">
        <div className="text-center">
          <h5 className="mb-1">{props.completeValue}%</h5>
          <span>Complete</span>
        </div>
        <div className="text-center">
          <h5 className="mb-1">{props.myTasksValue}</h5>
          <span>My Tasks</span>
        </div>
        <div className="text-center">
          <h5 className="mb-1">{props.daysDueValue}</h5>
          <span>Days Due</span>
        </div>
      </div>
    </div>
  </React.Fragment>
);
ProjectsList.propTypes = {
  title: PropTypes.string,
  badgeColor: PropTypes.string,
  badgeTitle: PropTypes.string,
  completeValue: PropTypes.string,
  myTasksValue: PropTypes.string,
  daysDueValue: PropTypes.string
};
ProjectsList.defaultProps = {
  badgeColor: "secondary",
  badgeTitle: "Waiting",
  completeValue: "60",
  myTasksValue: "5",
  daysDueValue: "53"
};

export { ProjectsList };
