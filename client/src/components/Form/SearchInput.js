import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setSearchKeywordResult } from "../../redux/searchSlice";
import { useDispatch } from "react-redux";
const SearchInput = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/search/${keyword}`
      );
      dispatch(setSearchKeywordResult({ result: data, keyword }));
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
