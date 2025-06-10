import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const data = useSelector((state) => state.posts?.data);
  const error = useSelector((state) => state.posts?.error);
  const apiStatus = useSelector((state) => state.posts?.apiStatus);
  const dispatch = useDispatch();

  const fetchPosts = () => {
    dispatch({ type: "FETCH_POSTS" });
  };
  if (apiStatus === "init") {
    return <button onClick={fetchPosts}>load your first post</button>;
  }
  if (apiStatus === error) {
    return (
      <div>
        <b style={{ color: "red" }}>{error}</b>
        <button onClick={fetchPosts}>try again</button>
      </div>
    );
  }
  if (apiStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            margin: "1rem 0",
          }}
        >
          <h2>
            {user.name} ({user.username})
          </h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>

          <h3>Address</h3>
          <p>
            {user.address.suite}, {user.address.street}, {user.address.city} -{" "}
            {user.address.zipcode}
          </p>
          <p>
            <strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng:{" "}
            {user.address.geo.lng}
          </p>

          <h3>Company</h3>
          <p>
            <strong>Name:</strong> {user.company.name}
          </p>
          <p>
            <strong>CatchPhrase:</strong> {user.company.catchPhrase}
          </p>
          <p>
            <strong>BS:</strong> {user.company.bs}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
