import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/Master-Layout";

import Registration from "../components/Registration/Registration";

function RegistrationPage() {
  return (
    <Fragment>
      <MasterLayout>
        <Registration />
      </MasterLayout>
    </Fragment>
  );
}

export default RegistrationPage;
