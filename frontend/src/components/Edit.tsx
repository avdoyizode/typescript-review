import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmpSuccess } from "../emp/actions/actions";
import { AppState } from "../emp/reducers";
import { fetchEmpRequest } from "../emp/actions/actions";

import Error from "../pages/Error";
import Loading from "../pages/Loding";
import navimg from "../images/navimg.svg";
import axios from "axios";
import { IEmp } from "../emp/constants";
import empSaga from "../emp/sagas/sagas";


const Edit = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  const error = useSelector((state: AppState) => state.emp.error);

  const emps = useSelector((state: AppState) => state.emp.emps);
  const pending = useSelector((state: AppState) => state.emp.pending);
  useEffect(() => {
      dispatch( updateEmpSuccess());
    }, [dispatch]);
  };

  return (
    <div className="container-edit">
      <div style={{ padding: "15px" }}>
        {pending ? (
          <div>
            <Loading />
          </div>
        ) : error ? (
          <div>
            <Error />
          </div>
        ) : (
          emps.map((emp: any) => (
            <div style={{ marginBottom: "10px" }} key={emp.name}>
              {emp.name}
              {emp.city}
              {emp.age}
            </div>
          ))
        )}
      </div>
      );
      <div className="nav-bar">
        <div className="nav-flex">
          <div className="logo">Eduate</div>
          <div className="nav-items-1">
            <a href="/Home">Home</a>
          </div>
          <div className="nav-items-2">
            <a href="/Add Employees">Add Employees </a>
          </div>
          <div className="nav-items-3">
            <a href="/View">View</a>
          </div>
          <div className="nav-img">
            <img src={navimg} alt="/" />
          </div>
        </div>
        <div className="edit">
          <h2>Edit Employee</h2>
        </div>
        <div className="edit-name">
          <h1>Name </h1>
          <input
            type="text-1"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="edit-age">
          <h1>Age</h1>
          <input
            type="text-2"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="edit-city">
          <h1>City</h1>
          <input
            type="text-3"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div className="edit-status">
          <h1>Status</h1>
          <select>
            <option value="val1">true</option>
            <option value="val2">false</option>
          </select>
        </div>
        <button className="btn-1">Edit</button>
        <button className="btn-2">Clear</button>
      </div>
    </div>
  );
};
export default Edit;
