import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hoocks/useForm';

function CadastroVideo() {
  const { handleChange, values } = useForm({

  });

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form>
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.nome}
          onChange={handleChange}
        />
      </form>


      <Link to="/cadastro/categoria">
        Cadastrar Categoria
        </Link>
    </PageDefault>
  );
}

export default CadastroVideo;