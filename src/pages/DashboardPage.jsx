import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";

import Dashboard from "../components/Dashboard/Dashboard";
function DashboardPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Dashboard />
      </MasterLayout>
    </Fragment>
  );
}

export default DashboardPage;
