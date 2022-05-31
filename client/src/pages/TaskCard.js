import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card";
import loadData from "./components/loadData"

const TaskCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData(setData);
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="addBtnBar">
        <Link to="/">
          <button className="btn btn btn-light">Table model</button>
        </Link>
        <Link to="/addTask">
          <button className="btn btn-primary btn-circle btn-md">+</button>
        </Link>
      </div>

      <div class="card-group">
        {data.map((item, index) => {
          return (
            <Card
              id={item.id}
              task={item.task}
              detail={item.detail}
              note={item.note}
              number={index + 1}
              setData={setData}
            />
          );
        })}
      </div>

    </div>
  );
};

export default TaskCard;
