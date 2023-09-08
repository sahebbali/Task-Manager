import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";

import Create from "../components/Create/Create";

function CreatePage() {
  return (
    <Fragment>
      <MasterLayout>
        <Create />
      </MasterLayout>
    </Fragment>
  );
}

export default CreatePage;
