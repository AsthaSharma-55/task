import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudent , clearStudent, deleteStudent1 } from "../../redux/features/studentSlice";



const Student = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const student = useSelector((state) => state.student.student);
    useEffect(() => {
        dispatch(getStudent(params.id))
        return ()=>{
            dispatch(clearStudent())
        }
    }, [])

   
    return (
        <div>
            <div><h1>NAME:{student.firstName} {student.lastName}</h1></div>
            <div><h1> EMAIL:{student.email}</h1></div>
            <div><h1>PHONE NO:{student.phone}</h1> </div>
            <div><h1>ADDRESS:{student.address}</h1> </div>

        </div>
    )
}
export default Student;