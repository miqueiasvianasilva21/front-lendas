import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Axios from "axios";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function CreateLegend() {
  const { nome } = useParams();
  const navigate = useNavigate(); 
  
  const CriarLenda = (values) => {
    const formData = new FormData();
    formData.append('titulo', values.titulo);
    formData.append('imagem', values.imagem); // Usando o mesmo nome do campo do formulário
    formData.append('descricao', values.descricao);
    formData.append('historia', values.historia);
  
    Axios.post("https://lendas-server.vercel.app/create_legend", formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Defina o cabeçalho apropriado
      },
    })
      .then((response) => {
        console.log(response);
        navigate(`/welcome/${values.nome}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  
  
  const validarLenda = yup.object().shape({
    titulo: yup
      .string()
      .required("O título é obrigatório")
      .max(20, "O título deve ter no máximo 20 caracteres"),
    descricao: yup
      .string()
      .required("A descrição é obrigatória")
      .max(40, "A descrição deve ter no máximo 40 caracteres"),
  });
  

  // }); 
  return (
    <div className="container">

       <h1>Autor : {nome}</h1> 

      <Formik initialValues={{}}
      onSubmit={CriarLenda} validationSchema={validarLenda}>
         <Form className="login-form">
        
         <div className="login-form-group">
            <Field name="titulo" className="form-field" placeHolder="Título"/>
            <ErrorMessage 
            component="span" 
            name="titulo"
            className = "form-error"/>
          </div>
          <div className="login-form-group">
          <Field type="file" name="imagem" className="form-field" />
         <ErrorMessage
        component="span"
        name="imagem"
        className="form-error"
        />
</div>



          <div className="login-form-group">
            <Field name="descricao" className="form-field" placeHolder="descricao"/>
            <ErrorMessage 
            component="span" 
            name="descricao"
            className = "form-error"/>
          </div>

          <div className="login-form-group">
            <Field name="historia" className="form-field" placeHolder="História"/>
            <ErrorMessage 
            component="span" 
            name="historia"
            className = "form-error"/>
          </div>
          <button className="button" type="submit">Criar lenda</button>
         </Form>
      </Formik>
    
      
    </div>
  ); 
  
}

export default CreateLegend;