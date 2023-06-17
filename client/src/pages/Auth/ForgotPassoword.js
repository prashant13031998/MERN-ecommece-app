import React, { useState } from "react";
import Layout from "../../components/layout/Layout";

import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/authStyles.css";

const ForgotPassoword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewpassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      if (res.data.success) {
        toast.success(res.data.message);

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <h1>Forgot password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewpassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputAnswer"
              placeholder="What is your favourite sport ?"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <button type="submit" className="btn btn-primary">
              RESET
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassoword;
