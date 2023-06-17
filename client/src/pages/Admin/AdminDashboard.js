import React from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card p-3 w-75">
              <h4>Admin Name - {auth?.user?.name}</h4>
              <h4>Admin Phone - {auth?.user?.phone}</h4>
              <h4>Admin Email - {auth?.user?.email}</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
