import "./user.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users", {
          // withCredentials: true,
          // headers: {
          //     'Content-Type': 'application/json',
          //     'Access-Control-Allow-Origin': '*',
          //     'Access-Control-Allow-Credentials': true
          // }
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:8080/api/users/${userId}`)
      .then((response) => {
        setUsers((previousUsers) =>
          previousUsers.filter((user) => user.id !== userId)
        );
        toast.success("User Deleted Successfully", { position: "top-right" });
        toast.success(response.data.message, { position: "top-right" });
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="userTable">
      <Link to="/add" type="button" class="btn btn-primary">
        Add User <i class="fa-solid fa-user-plus"></i>
      </Link>

      {users.length === 0 ? (
        <div className="noData">
          <h3>No Users Found</h3>
          <p>Please add a user to see the list.</p>
        </div>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td className="actionButtons">
                    <Link
                      to={`/update/` + user.id}
                      type="button"
                      className="btn btn-info"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
