import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { API_KEY_TASK } from "../../global/constants";
import loadData from "./loadData"
import axios from "axios";

function Row({ id, task, detail, note, number, setData }) {

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
    <tr key={id}>
      <th scope="row">{number}</th>
      <td>{task}</td>
      <td>{detail}</td>
      <td>{note}</td>
      <td>
        <Link to={`/update/${id}`}>
          <button className="btn btn-outline-primary">
            <i class="fas fa-edit"></i>
          </button>
        </Link>
      </td>
      <td>
        <button
          className="btn btn-outline-danger"
          onClick={() => deleteTask(id)}
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </td>
      <td>
        <Link to={`/view/${id}`}>
          <button className="btn btn-outline-success">
            <i class="far fa-eye"></i>
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default Row;
