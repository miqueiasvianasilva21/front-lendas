import React, { useEffect } from 'react';

function Image() {
  useEffect(() => {
    // Coloque o código JavaScript aqui, dentro deste useEffect
    document.getElementById('imageForm').addEventListener('submit', function handleFormSubmit(e) {
      e.preventDefault();
      document.getElementById('imageForm').removeEventListener('submit', handleFormSubmit)
      const formData = new FormData();
      formData.append('image', document.getElementById('imageInput').files[0]);
      formData.append('titulo', document.getElementById('titulo').value);
      ;
      fetch('https://lendas-server.vercel.app/upload', {
        method: 'POST',
        body: formData,
        
      })
      .then(response => response.json())
      .then(data => {
        console.log('Imagem enviada com sucesso. Caminho da imagem: ', data.imagePath);
        alert('Imagem enviada com sucesso. Caminho da imagem: ' + data.imagePath);
      })
      .catch(error => {
        console.error('Erro ao enviar a imagem:', error);
        alert('Erro ao enviar a imagem. Verifique o console para detalhes.');
      });
    });
  }, []);

  return (
    <div className="container">
      <h1>Upload de Imagem</h1>
      <form id="imageForm" encType="multipart/form-data">
        <p><input type="file" id="imageInput" name="image" accept="image/*" /></p>
        Titulo: <input type="text" id="titulo" name="titulo" placeholder='titulo'/>
        <p>Descrição: <input type="text" id="descricao" name="descricao" placeholder='descricao'/></p>
        História: <textarea id="historia" name="historia" rows="5" cols="40"></textarea>
        <button type="submit">Enviar Imagem</button>
      </form>
    </div>
  );
}

export default Image;
