import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";

import Progress from "../components/Progress/Progress";

function ProgressPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Progress />
      </MasterLayout>
    </Fragment>
  );
}

export default ProgressPage;
