import React, { useEffect } from "react";
import { getData } from "../Reducer/Actions";
import { useSelector, useDispatch } from "react-redux";

import Friend from "./friend";
import AddFriend from "./AddFriend";

export const FriendsList = () => {
  const Friends = useSelector(state => state.friends);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <AddFriend />
      <div className="Card-Container">
        {Friends.map(ele => (
          <Friend item={ele} />
        ))}
      </div>
    </div>
  );
};
export default FriendsList;
