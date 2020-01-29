import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendFriend } from "../Reducer/Actions";

function AddFriend() {
  const [friend, setFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendFriend(friend));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter name"
          name="name"
          value={friend.name}
          onChange={handleChange}
        />
        <input
          placeholder="Enter age"
          name="age"
          value={friend.age}
          onChange={handleChange}
        />
        <input
          placeholder="Enter Email"
          name="email"
          value={friend.email}
          onChange={handleChange}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}

export default AddFriend;
