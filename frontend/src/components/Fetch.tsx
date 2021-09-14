import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmpRequest } from "../emp/actions/actions";
import { AppState } from "../emp/reducers";
import Error from "../pages/Error";
import Loading from "../pages/Loding";

const Fetch = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const error = useSelector((state: AppState) => state.fetch.error);

  const emps = useSelector((state: AppState) => state.fetch.emps);

  const pending = useSelector((state: AppState) => state.fetch.pending);

  useEffect(() => {
    dispatch(fetchEmpRequest());
  }, [dispatch]);

  return (
    <div className="fetch__container">
      <input
        placeholder="search"
        className="fetch__container--input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <p>Employees</p>

      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
          </tr>
        </thead>
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
            <>
              <tbody>
                <tr>
                  <th>{emp.ID}</th>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.city}</td>
                </tr>
              </tbody>
            </>
          ))
        )}
      </table>
    </div>
  );
};

export default Fetch;
