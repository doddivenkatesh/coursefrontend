import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
import './adduser.css'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import MainLayout from '../../sidebar/Sidebar'
const AddUser = () => {

    const  users ={
        name:"",
        email:"",
        address:""
    };
    const [user,setUser] = useState(users);
    const navigate = useNavigate();
    const inputHandler = (e) =>{
    const {name,value}=e.target
    console.log(name,value)
    setUser({...user,[name]:value})
    }


    const submitForm = async (e) =>{
        e.preventDefault();
          await axios.post("http://localhost:8080/api/users",user)
          .then( (response) =>{
           toast.success("User Added Successfully", {position:"top-right"})
            console.log(response.data)
           toast.success(response.data.message, {position:"top-right"})
            navigate('/')
          })
          .catch( (error) =>{
            console.log(error)
          })
    }
    

  return (
    <MainLayout>
    <div className='addUser'>
     
      <Link to="/" type="button" class="btn btn-secondary"><i class="fa-solid fa-backward"></i> Back</Link>

      <h3>Add New User </h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name" >Name</label>
          <input type="text" id="name"   name="name" onChange={inputHandler} autoComplete='off' placeholder="Enter your name"/>
        </div>
      <div className="inputGroup">
          <label htmlFor="email" >E-mail</label>
          <input type="email" id="email" onChange={inputHandler} name='email' autoComplete='off' placeholder="Enter your Email"/>
        </div>
        <div className="inputGroup">
          <label htmlFor="address" >Enter Address</label>
          <input type="text" id="address" onChange={inputHandler} name='address' autoComplete='off' placeholder="Enter your Address"/>
        </div>

        <div className="inputGroup">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
      </form>
      
    </div>
    </MainLayout>
  )
}

export default AddUser
