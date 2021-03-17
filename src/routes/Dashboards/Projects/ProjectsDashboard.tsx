import React, { FC } from "react";
import { Container } from "components";
import { setupPage } from "components/Layout/setupPage";

const ProjectsDashboard: FC = () => <Container></Container>;

export default setupPage({
  pageTitle: "Projects Dashboard"
})(ProjectsDashboard);
