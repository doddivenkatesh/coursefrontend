import React, {  } from 'react'
import { Link,useNavigate,useParams} from 'react-router-dom'
import './update.css'
import { useState,useEffect} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
const UpdateUser = () => {

    const  users ={
        name:"",
        email:"",
        address:""
    };
    const [user,setUser] = useState(users);
    const navigate = useNavigate();
    const {id} = useParams();
    const inputHandler = (e) =>{
    const {name,value}=e.target
    console.log(name,value)
    setUser({...user,[name]:value})
    };

    useEffect(() => {
                    axios.get(`http://localhost:8080/api/users/${id}`)
                    .then( (response) =>{
                        setUser(response.data);
                    })
                    .catch( (error) =>{
                        console.log("Error while fetching user data", error);
                    })
    },[id])



    const submitForm = async (e) =>{
        e.preventDefault();
          await axios.put(`http://localhost:8080/api/users/${id}`,user)
          .then( (response) =>{
           toast.success("User Updated Successfully", {position:"top-right"})
            console.log(response.data)
           toast.success(response.data.message, {position:"top-right"})
            navigate('/')
          })
          .catch( (error) =>{
            console.log(error)
          })
    }
    

  return (
    <div className='addUser'>
     
      <Link to="/" type="button" class="btn btn-secondary"><i class="fa-solid fa-backward"></i> Back</Link>

      <h3>Update User </h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name" >Name</label>
          <input type="text" name="name" id="name" value={user.name} onChange={inputHandler} autoComplete='off' placeholder="Enter your name"/>
        </div>
      <div className="inputGroup">
          <label htmlFor="email" >E-mail</label>
          <input type="email" id="email" value={user.email} onChange={inputHandler} name='email' autoComplete='off' placeholder="Enter your Email"/>
        </div>
        <div className="inputGroup">
          <label htmlFor="address" >Enter Address</label>
          <input type="text" id="address" value={user.address} onChange={inputHandler} name='address' autoComplete='off' placeholder="Enter your Address"/>
        </div>

        <div className="inputGroup">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
      </form>
      
    </div>
  )
}

export default UpdateUser
