import React from "react";
import { useDispatch } from "react-redux";
import { IEmp } from "../emp/constants/index";

import { NewEmp } from "../emp/actions/actions";
const NewEm: React.FC<IEmp> = () => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(Number);
  const [city, setCity] = React.useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("here");
    // console.log(dispatch(NewEmp(name, parseInt(age), city)));
    dispatch(NewEmp(name, age, city));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={age}
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />{" "}
        <input
          type="text"
          value={city}
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />{" "}
        <button onClick={(e) => handleSubmit(e)}>ADD</button>
      </form>
    </div>
  );
};

export default NewEm;
