import React from 'react'
import { useItemContext } from '../../CartContext';
import { Button, TextField } from '@mui/material';
import LogoJordan from "../../img/LogoJordanBlanco.svg"

// Formik y Yup
import { Formik } from 'formik';
import * as Yup from 'yup';

// esquema de validación con YUP
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
})

const submitHandler = (values, resetForm) => {
  console.log(values);
  resetForm();
}

const CheckOut = () => {
  const {cartList, totalPriceCart} = useItemContext()
  console.log("esto veo en mi checkout", cartList, "por un total de", totalPriceCart());
  return(
    <div className="checkout">
      <h1>El último paso</h1>
      <Formik 
      initialValues = {{name: " ", lastname: " ", email: " ", birthdate: " "}}
      onSubmit= {(values, {resetForm}) => submitHandler(values, resetForm)}
      validationSchema={validation}
      >
        {(
          values,
          erros,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty, 
        ) => (

      <form className = "Form" onSubmit={handleSubmit}>
        <TextField 
        name = "name"
        placeholder = "Michael"
        variant = "outlined"
        onChange={handleChange} // esto va a dispararse cada vez que haya un cambio en el input del form
        value= {values.name} // este values es el que se pasa por parámetro y toma el valor del input
        onBlur= {handleBlur}
        />
         <TextField 
        name = "lastname"
        placeholder = "Jordan"
        variant = "outlined"
        onChange={handleChange}
        value= {values.lastname}
        onBlur= {handleBlur}
        />
         <TextField 
        name = "mail"
        placeholder = "MJ@gmail.com"
        variant = "outlined"
        onChange={handleChange}
        value= {values.mail}
        onBlur= {handleBlur}
        />
         <TextField 
        name = "birthdate"
        placeholder = "17/2/1963"
        variant = "outlined"
        onChange={handleChange}
        value= {values.birthdate}
        onBlur= {handleBlur}
        />
       <Button variant = "contained"
       type = "submit" // si no está el type el formulario no funciona
       color = "warning"
       > <img src={LogoJordan} alt="JordanLogo"></img></Button>
      </form>
  )}
        </Formik>
    </div>
  ) 
};

export default CheckOut
