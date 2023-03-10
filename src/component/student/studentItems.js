import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../../redux/features/studentSlice";


const StudentItems=({student})=>{
    const { id, firstName, lastName, email, phone, address } = student;
    const dispatch=useDispatch()

    const handleDelete = () => {
        dispatch(deleteStudent(id));
      };
    //   useEffect(()=>{
    //     dispatch(clearStudent())
    //   },[])

    return(
        
             <tr>
                {/* <td>{id}</td> */}
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td>
                    <button><Link   to={`/students/${id}`}style={{textDecoration: "none",color: "black"}}>View</Link></button>
                    <button><Link   to={`/students/${id}/edit`} style={{textDecoration: "none",color: "black"}}>Edit</Link></button>
                    
                    <button onClick={handleDelete}>Delete</button>
                </td>
             </tr>
        
    )
}
export default StudentItems;