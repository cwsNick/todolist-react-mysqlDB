import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Row from "./components/Row";
import loadData from "./components/loadData"

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData(setData);
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="addBtnBar">
        <Link to="/card">
          <button className="btn btn btn-light">Card model</button>
        </Link>
        <Link to="/addTask">
          <button className="btn btn-primary btn-circle btn-md">+</button>
        </Link>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Detail</th>
            <th>Note</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <Row
                id={item.id}
                task={item.task}
                detail={item.detail}
                note={item.note}
                number={index + 1}
                setData={setData}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
