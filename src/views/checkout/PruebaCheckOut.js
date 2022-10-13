import React, {useState} from 'react'
import LogoJordan from "../../img/LogoJordanBlanco.svg"
import { Button, TextField } from '@mui/material';
import { collection, addDoc } from "firebase/firestore";
import {Db} from "../../firebase/FirebaseConfig"
import { useItemContext } from '../../CartContext';
import Swal from 'sweetalert2'
import Logo from "../../img/JordanIcono.svg"
import {Form, Formik } from "formik"
import * as Yup from "yup"

const initialState = {
  name:"",
  lastname:"",
  mail: "",
  birthdate: ""
}


const PruebaCheckOut = () => {
    const [values, setValues] = useState(initialState);
    console.log("values",values);
    
    
    const {cartList, setCartList} = useItemContext()

    const validation = Yup.object().shape({
      name: Yup.string().min(2, 'Nombre demasiado corto') // la propiedad name de mi textfield que sea un string, mínimo 2 caracteres, máximo 30 y que sea un valor requerido.
      .max(30, 'Nombre demasiado largo')
      .required('Valor requerido'), 
      lastname: Yup.string().min(2, 'Nombre demasiado corto')
      .max(30, 'Nombre demasiado largo')
      .required('Valor requerido'),
      mail: Yup.string().email("Ese mail no es válido").required("Valor requerido"),
      birthdate: Yup.date()
      .max(new Date(Date.now() - 567648000000), "Sos menor de 18 años")
      .required("Valor requerido"),
      }). required(); 

    const handleOnChange = (e) => {
const {value, name} = e.target; 
setValues({...values, [name]: value}) // acá se le agrega a "values" (que comienza vacío en el initialState) 
// el campo name que está dentro de cada textfield y su valor respectivo 
}

const onSubmit = async (e) => {
  e.preventDefault();
console.log("el onSubmit", values);
// Add a new document with a generated id.
const docRef = await addDoc(collection(Db, "sells"), {
  ...values, cartList
});
setValues(initialState);
Swal.fire({
  title: `Gracias por elegirnos ${values.name}!`,
  text:  `Tu compra tiene el ID ${docRef.id}`,
  imageUrl: `${Logo}` ,
  imageWidth: 400,
  imageHeight: 300,
  imageAlt: 'Custom image',
})
setCartList([]);
}

  return (
    <div className="checkout">
      <h1>El último paso</h1>
      <Formik
      validationSchema = { validation }
      >
       {(
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty, 
        ) => (
      <Form className = "Form" onSubmit={onSubmit}>
        <TextField 
        name = "name"
        placeholder = "Michael"
        variant = "outlined"
        type = "text"
        value= {values.name} // este values es el que se pasa por parámetro y toma el valor del input
        onChange= {handleOnChange}
        />
        {/* <ErrorMessage name = {values.name}/> */}
        {/* {errors.name && touched.name && errors.name} */}
         <TextField 
        name = "lastname"
        placeholder = "Jordan"
        variant = "outlined"
        type = "text"
        value= {values.lastname}
        onChange= {handleOnChange}
        />
        {/* {errors.lastname && touched.lastname && errors.lastname} */}
         <TextField 
        name = "mail"
        placeholder = "MJ@gmail.com"
        variant = "outlined" 
        type = "mail"      
        value= {values.mail}
        onChange= {handleOnChange}
        />
        {/* {errors.mail && touched.mail && errors.mail} */}
         <TextField 
        name = "birthdate"
        placeholder = "17/2/1963"
        variant = "outlined" 
        type = "date"      
        value= {values.birthdate}
        onChange= {handleOnChange}
        />
        {/* {errors.birthdate && touched.birthdate && errors.birthdate} */}
       <Button variant = "contained"
       type = "submit" // si no está el type el formulario no funciona
       color = "warning"
       > <img src={LogoJordan} alt="JordanLogo"></img></Button>
      </Form>
      )}
      </Formik>
      </div>
  )
}

export default PruebaCheckOut
