import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";

import AllTask from "../components/AllTask/AllTask";

function AllTaskPage() {
  return (
    <Fragment>
      <MasterLayout>
        <AllTask />
      </MasterLayout>
    </Fragment>
  );
}

export default AllTaskPage;
