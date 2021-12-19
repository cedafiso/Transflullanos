import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import barco from "../auth/img/29697.svg";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Topbar />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800" padding-right= "0.5" >Dashboard</h1>
              </div>
              <div className="content-all-registrer">
                
              <div className="ctn-form">
                
              <h1>Bienvenido a Transfullanos</h1>
              </div>
              <div className="ctn-image">
              <img src={barco} alt="" className="" height="380" width="630" />
              </div>
            
             </div>

              {/* Content page */}
              {/* <!-- Content Row --> */}
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
