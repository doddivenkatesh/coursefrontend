// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import MainLayout from "../LMS/sidebar/Sidebar";
// const SagaUser = () => {
//   const error = useSelector((state) => state.error);
//   const data = useSelector((state) => state.data);
//   const apiStatus = useSelector((state) => state.apiStatus);

//   const dispatch = useDispatch();
//   const fetchUser = () => {
//     dispatch({ type: "FETCH_USER" });
//   };

//   if (apiStatus === "init") {
//     return <button onClick={fetchUser}>Load you First User</button>;
//   }

//   if (apiStatus === "error") {
//     return (
//       <div>
//         <b style={{ color: "red" }}>{error}</b>
//         <button onClick={fetchUser}> Try again</button>
//       </div>
//     );
//   }
//   if (apiStatus === "loading") {
//     return <h1>Loading...</h1>;
//   }

//   const user = data.result?.[0];
//   const email = user?.email;
//   const phone = user?.phone;
//   const image = user?.picture?.large;
 

//   const fullName =
//     user?.name?.title + " " + user?.name?.first + " " + user?.name?.last;

//   return (
//         <MainLayout>
//     <div>
//       <h1>{fullName}</h1>
//       <img src={image} alt="User" />
//       <p>Email: {email}</p>
//       <p>Phone: {phone}</p>
//       <button onClick={fetchUser}>Fetch Another User</button>
//     </div>
//     </MainLayout>
//   );
// };

// export default SagaUser;
