import React, {useState} from 'react'
import LogoJordan from "../../img/LogoJordanBlanco.svg"
import { Button, TextField } from '@mui/material';
import { collection, addDoc } from "firebase/firestore";
import {Db} from "../../firebase/FirebaseConfig"
import { useItemContext } from '../../CartContext';
import Swal from 'sweetalert2'
import Logo from "../../img/JordanIcono.svg"

const initialState = {
    name:"",
    lastname:"",
    mail: "",
    birthdate: ""
}

const PruebaCheckOut = () => {
    const [values, setValues] = useState(initialState);
    
    const {cartList, setCartList} = useItemContext()

    const handleOnChange = (e) => {
const {value, name} = e.target; 
setValues({...values, [name]: value})
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
      <form className = "Form" onSubmit={onSubmit}>
        <TextField 
        name = "name"
        placeholder = "Michael"
        variant = "outlined"
        value= {values.name} // este values es el que se pasa por parámetro y toma el valor del input
        onChange= {handleOnChange}
        />
        {/* {errors.name && touched.name && errors.name} */}
         <TextField 
        name = "lastname"
        placeholder = "Jordan"
        variant = "outlined"
        value= {values.lastname}
        onChange= {handleOnChange}
        />
        {/* {errors.lastname && touched.lastname && errors.lastname} */}
         <TextField 
        name = "mail"
        placeholder = "MJ@gmail.com"
        variant = "outlined"       
        value= {values.mail}
        onChange= {handleOnChange}
        />
        {/* {errors.mail && touched.mail && errors.mail} */}
         <TextField 
        name = "birthdate"
        placeholder = "17/2/1963"
        variant = "outlined"       
        value= {values.birthdate}
        onChange= {handleOnChange}
        />
        {/* {errors.birthdate && touched.birthdate && errors.birthdate} */}
       <Button variant = "contained"
       type = "submit" // si no está el type el formulario no funciona
       color = "warning"
       > <img src={LogoJordan} alt="JordanLogo"></img></Button>
      </form>
      </div>
  )
}

export default PruebaCheckOut
