import React from "react";
import Layout from "../../components/layout/Layout";
import { useSelector } from "react-redux";
import UserMenu from "../../components/layout/UserMenu";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card p-3 w-75">
              <h4>User name - {auth?.user?.name}</h4>
              <h4>User Phone - {auth?.user?.phone}</h4>
              <h4>User Email - {auth?.user?.email}</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
