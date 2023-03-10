import React,{useEffect} from "react";
import StudentItems from "./studentItems";
import { useSelector ,useDispatch} from "react-redux";
import { Link } from "react-router-dom"; 
import { deleteStudent1 } from "../../redux/features/studentSlice";



const Students = () => {
    const dispatch = useDispatch()
    

        const students = useSelector((state) => state.student.students);
        console.log(students)
   
    return (
        <>
            <table border={"1px"}>
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>FirstName</th>
                        <th>lastName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <StudentItems key={student.id} student={student} />
                    ))} 
                </tbody>
            </table>
             <Link to="/students/create">
             <button style={{float: "right",width: "100px",marginRight: "87px",height: "46px"}}>Add</button>
            </Link>
            </>
        
    )
}
export default Students;