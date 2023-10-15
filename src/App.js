import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Axios from "axios";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate(); 
  
  const handleClickRegister = (values) => Axios.post("https://lendas-server.vercel.app/adduser",{
    nome: values.nome,
    email: values.email,
    senha:values.senha,
  }).then((response)=>{
    console.log(response)
    navigate(`/welcome/${values.nome}`);
  });
  // // const handleClickCadastro =(values) => console.log(values);
  // const validationLogin = yup.object().shape({ email: yup.string().email("Não é um email").required("este campo é obrigatório"),
  //   password: yup.string().min(8, "A senha deve ter 8 caracteres").required("este campo é obrigatório"),

  // })
 
  
  const validationRegister = yup.object().shape({ email: yup.string().email("Não é um email").required("este campo é obrigatório"),
  senha: yup.string().min(8, "A senha deve ter 8 caracteres").required("este campo é obrigatório"),
  confirmsenha: yup.string().oneOf([yup.ref("senha"),null],"As senhas não são iguais"),

})

  // }); 
  return (
    <div className="container">
      {/* <h1>Login</h1>
      <Formik initialValues={{}}
      onSubmit={handleClickLogin} validationSchema={validationLogin}>
        
         <Form className="login-form">
         
          <div className="login-form-group">
            <Field name="email" className="form-field" placeHolder="Email"/>
            <ErrorMessage 
            component="span" 
            name="email"
            className = "form-error"/>
          </div>

          <div className="login-form-group">
            <Field name="senha" className="form-field" placeHolder="Senha"/>
            <ErrorMessage 
            component="span" 
            name="senha"
            className = "form-error"/>
          </div>
          <button className="button" type="submit">Login</button>
         </Form>
  </Formik> */}

      <h1>Cadastro</h1>

      <Formik initialValues={{}}
      onSubmit={handleClickRegister} validationSchema={validationRegister}>
         <Form className="login-form">
         <div className="login-form-group">
            <Field name="nome" className="form-field" placeHolder="Nome"/>
            <ErrorMessage 
            component="span" 
            name="nome"
            className = "form-error"/>
          </div>
          <div className="login-form-group">
            <Field name="email" className="form-field" placeHolder="Email"/>
            <ErrorMessage 
            component="span" 
            name="email"
            className = "form-error"/>
          </div>

          <div className="login-form-group">
            <Field name="senha" className="form-field" placeHolder="Senha"/>
            <ErrorMessage 
            component="span" 
            name="senha"
            className = "form-error"/>
          </div>

          <div className="login-form-group">
            <Field name="confirmsenha" className="form-field" placeHolder="Confirme sua senha"/>
            <ErrorMessage 
            component="span" 
            name="confirmsenha"
            className = "form-error"/>
          </div>
          <button className="button" type="submit">Cadastrar</button>
         </Form>
      </Formik>
    
      
    </div>
  ); 
  
}

export default App;