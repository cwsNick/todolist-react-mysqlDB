import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { API_KEY_TASK } from "../global/constants";

const initialState = {
  task: "",
  detail: "",
  note: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { task, detail, note } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(API_KEY_TASK + id)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task || !detail || !note) {
      toast.error("Please provide value into all field");
    } else {
      if (!id) {
        axios
          .post(API_KEY_TASK, {
            task,
            detail,
            note,
          })
          .then(() => {
            setState({ task: "", detail: "", note: "" });
          })
          .catch((err) => toast.error(err.response.data));

        toast.success("Task Added Successfully");
      } else {
        axios
          .put(API_KEY_TASK + id, {
            task,
            detail,
            note,
          })
          .then(() => {
            setState({ task: "", detail: "", note: "" });
          })
          .catch((err) => toast.error(err.response.data));

        toast.success("Task Updated Successfully");
      }

      setTimeout(() => navigate("/"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Link to="/">
        <div className="btn btn-circle btn-md btn-light">
          <i className="fa-solid fa-angle-left"></i>
        </div>
      </Link>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{id ? "Update" : "Save"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="task">Task</label>
              <input
                type="text"
                className="form-control"
                id="task"
                name="task"
                placeholder="You Name..."
                value={task || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="detail">Detail</label>
              <input
                type="text"
                id="detail"
                name="detail"
                value={detail || ""}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter detail"
              />
            </div>
            <div className="form-group">
              <label for="note">Note</label>
              <input
                type="text"
                className="form-control"
                id="note"
                name="note"
                placeholder="Note..."
                value={note || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" class="btn btn-primary">
                {id ? (
                  <i class="fa-solid fa-arrow-up-long"></i>
                ) : (
                  <i class="fa-solid fa-floppy-disk"></i>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEdit;
