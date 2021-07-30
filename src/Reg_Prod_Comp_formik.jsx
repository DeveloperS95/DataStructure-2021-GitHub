import { useFormik } from 'formik';
import React from 'react';
import ReactDOM from 'react-dom';

const validateProduct = productData => {
    const errors = {}
    if(!productData.Name) {
        errors.Name = 'Product Name Required';
    } else if(productData.Name.length<4) {
        errors.Name = 'Name too short..Min 4 required';
    }

    if(!productData.Price) {
        errors.Price = 'Product Price Required';
    } 
    
    if(!productData.Code) {
        errors.Code = 'Product Code Required';
    } else if (!/[A-Z]{3}[0-9]{2}/.test(productData.Code)) {
        errors.Code = 'Invalid Code..';
    }
   return errors;
}

const RegisterProductComponent = () => {
    const formik = useFormik({
        initialValues: {
            Name: '',
            Price: '',
            Code: ''
        },
        validate: validateProduct,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return(
        <div>
            <h2>Register Product</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <div>
                        <input name="Name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Name} type="text" />
                        <div className="text-danger">
                            {(formik.touched.Name && formik.errors.Name)?formik.errors.Name:null}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <div>
                        <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="Price" value={formik.values.Price} />
                        <div className="text-danger">
                            {(formik.touched.Price && formik.errors.Price)?formik.errors.Price:null}
                        </div>
                    </div>
                </div>
                <div class="form-group">
                   <label>Code</label>
                   <div>
                       <input onBlur={formik.handleBlur} onChange={formik.handleChange} name="Code" value={formik.values.Code} type="text" />
                       <div className="text-danger">
                            {(formik.touched.Code && formik.errors.Code)?formik.errors.Code:null}
                       </div>
                   </div>
                </div>
                <div className="form-group">
                    <button>Register</button>
                </div>
            </form>
        </div>
    )
}
ReactDOM.render(
    <RegisterProductComponent />,
    document.getElementById("root")
);
export default RegisterProductComponent;
