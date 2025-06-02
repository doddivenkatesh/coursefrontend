import React from 'react'
import './user.css'
import { useState } from 'react'
const User = () => {


    const [users,setUsers] = useState([]);

    useEffect( () =>{
        const fetchData = async () =>{

            try{
                 await get("http://localhost:8080/api/users")
            }catch(error){
                console.error("Error while fetching data:", error);
            }
        }
    })
  return (
    <div className='userTable'>
        <button type="button" class="btn btn-primary">Add User <i class="fa-solid fa-user-plus"></i></button>
         <table className='table table-bordered'>

            <thead>
                <tr>
                    <th scope='col'>S.No</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Actions</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Leanne Graham</td>
                    <td>bret@gamil.com
                    </td>
                         <td>canada</td>
                              <td className='actionButtons'>
                                <button type="button" class="btn btn-info"> <i class="fa-solid fa-pen-to-square"></i></button>
                               
                                <button type="button" class="btn btn-danger"> <i class="fa-solid fa-trash"></i></button>
                                <i class="fa-solid fa-trash"></i>
                                </td>
                
                </tr>
            </tbody>
         </table>
     
    </div>
  )
}

export default User
