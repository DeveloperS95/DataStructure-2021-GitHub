import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
const YupValidationComponent = () => {
    const formik = useFormik({
        initialValues: {
            Name: '',
            Salary: '',
            Email: ''
        },
        validationSchema: yup.object({
            Name: yup.string()
                     .min(4, "Name too short..min 4 chars")
                     .max(10, "Name too long.. max 10 chars")
                     .required("User Name Required"),
            Salary: yup.number()
                        .min(1000, "Invalid salary amount")
                        .max(9999999,"You entered too much amount")
                       .required("Salary Required"),
            Email: yup.string()
                      .required("Email Required") 
                      .email("Invalid Email")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    })
    return(
        <div>
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
            <dl>
               <dt>Name</dt>
               <dd>
                   <input type="text" name="Name" {...formik.getFieldProps("Name")} />
               </dd>
               <dd className="text-danger">
                   {(formik.touched.Name && formik.errors.Name)? formik.errors.Name: null }
               </dd>
               <dt>Salary</dt>
               <dd>
                   <input type="text" name="Salary" {...formik.getFieldProps("Salary")} />
               </dd>
               <dd className="text-danger"> 
                   {(formik.touched.Salary && formik.errors.Salary)? formik.errors.Salary: null}
               </dd>
               <dt>Email</dt>
               <dd>
                   <input type="text" name="Email" {...formik.getFieldProps("Email")} />
               </dd>
               <dd className="text-danger">
                   {(formik.touched.Email && formik.errors.Email)? formik.errors.Email: null}
               </dd>
             </dl>
             <button>Register</button>
            </form>
        </div>
    )
}
export default YupValidationComponent;
