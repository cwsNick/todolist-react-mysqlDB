import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { API_KEY_TASK } from "../global/constants";

const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(API_KEY_TASK + id)
      .then((resp) => setUser({ ...resp.data[0] }));
  }, [id]);

  return (
    <div style={{ marginTop: "150px" }}>
      <Link to="/">
        <div className="btn btn-circle btn-md btn-light">
          <i class="fa-solid fa-angle-left"></i>
        </div>
      </Link>
      <div className="card shadow-sm p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ID: {id}</li>
            <li className="list-group-item">Detail: {user.detail}</li>
            <li className="list-group-item">Note: {user.note}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default View;
