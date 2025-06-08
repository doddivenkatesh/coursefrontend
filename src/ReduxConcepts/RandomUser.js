import React from "react";
import { useDispatch, useSelector } from "react-redux";

const RandomUser = () => {
  const error = useSelector((state) => state.user.error);
  const data = useSelector((state) => state.user.data);
  const apiStatus = useSelector((state) => state.user.apiStatus);

  const dispatch = useDispatch();
  const fetchUser = () => {
    dispatch({ type: "FETCH_USER" });
  };

  if (apiStatus === "init") {
    return <button onClick={fetchUser}>Load your First User</button>;
  }

  if (apiStatus === "error") {
    return (
      <div>
        <b style={{ color: "red" }}>{error}</b>
        <button onClick={fetchUser}>Try Again</button>
      </div>
    );
  }

  if (apiStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  const user = data?.results?.[0];
  const fullName = `${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`;
  const email = user?.email;
  const phone = user?.phone;
  const imageUrl = user?.picture?.large;

  return (
    <div>
      <h1>{fullName}</h1>
      <img src={imageUrl} alt="User" />
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button onClick={fetchUser}>Fetch Another User</button>
    </div>
  );
};

export default RandomUser;
