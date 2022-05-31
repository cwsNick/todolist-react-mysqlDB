import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { API_KEY_TASK } from "../../global/constants";
import loadData from "./loadData"
import axios from "axios";

function Card({ id, task, detail, note, number, setData }) {

  const deleteTask = (id) => {
    if (
      window.confirm("Delete that task ?")
    ) {
      axios.delete(API_KEY_TASK + id);
      toast.success("Task Deleted Successfully");
      setTimeout(() => loadData(setData), 500);
    }
  };

  return (
    <>
      <div class="card task-card">
        <div class="card-header">
          id: {id}
        </div>
        <div class="card-body">
          <h5 class="card-title">{task}</h5>
          <p class="card-text">{detail}</p>
          <p class="card-text"><small class="text-muted">{note}</small></p>
        </div>
        <div class="card-footer text-muted">
          <Link to={`/update/${id}`}>
            <button className="btn btn-outline-primary">
              <i class="fas fa-edit"></i>
            </button>
          </Link>
          <button
            className="btn btn-outline-danger"
            onClick={() => deleteTask(id)}
          >
            <i class="far fa-trash-alt"></i>
          </button>
          <Link to={`/view/${id}`}>
            <button className="btn btn-outline-success">
              <i class="far fa-eye"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
