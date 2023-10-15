import React from 'react';
import '../../css/home.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  function mostrarTexto(imagem, titulo, avaliacao, descricao) {
    const texto = document.getElementById('bem-vindo');
    const backgroundDiv = document.querySelector('.black-box');
    const capa = document.getElementById('capa');
    const conheca = document.getElementById('conheca');

    if (imagem === 'logo.png') {
      backgroundDiv.style.backgroundPosition = 'center';
      backgroundDiv.style.backgroundImage = "url('ceu3.avif')";
      backgroundDiv.style.opacity = '1';
    } else {
      backgroundDiv.style.backgroundPosition = 'center';
      backgroundDiv.style.backgroundImage = `url('${imagem}')`;
      backgroundDiv.style.opacity = '1';
    }

    capa.src = imagem;
    capa.style.opacity = '1';

    texto.innerHTML = `Título: ${titulo}<br><br>Avaliação: ${avaliacao} estrelas<br><br>Descrição: ${descricao}`;
    texto.style.fontSize = '30px';
    texto.style.position = 'absolute';
    texto.style.left = '400px';
    texto.style.top = '200px';
    conheca.innerHTML = '';
  }

  function historia() {
    mostrarTexto('logo.png', 'História', '4', 'História Genérica');
  }
  function uirapuru() {
    mostrarTexto('uirapuru.jpg', 'O Uirapuru me contou', '5', 'Conta a história do Uirapuru');
  }
  function boto() {
    mostrarTexto('boto.jpeg', 'O Boto cor de rosa', '5', 'Conta a história do boto');
  }
  function mapinguari() {
    mostrarTexto('mapinguari.jpeg', 'Mapinguari', '5', 'Conta a história do Mapinguari');
  }
  function cobra() {
    mostrarTexto('cobra.jpeg', 'Cobra grande', '5', 'Conta a história da cobra');
  }
  function curupira() {
    mostrarTexto('curupira.jpeg', 'Curupira', '5', 'Conta a história da Curupira');
  }

  return (
    <div>
      <div className="itens-menu">
        <p id="menu-botao"></p>
        <div className="menu-links" id="menu-links">
          <ul>
            <li>Perfil</li>
            <li>Configurações</li>
            <li>Ajuda</li>
          </ul>
        </div>
        <div className="menu-botoes" id="menu-botoes">
          <ul>
            <li>Início</li>
            <li><Link to="/create_legend">Criar História</Link></li>
            <li>Coleções</li>
            <li>Ajuda</li>
          </ul>
        </div>
        <input type="text" id="pesquisa" name="q" placeholder=" Pesquisar lendas" />
        <button type="submit" id="botao-pesquisa"><i className="fas fa-search"></i></button>
      </div>
      <div className="imagens">
        <p id="em-alta">Últimas Publicações</p>
        <img id="uirapuru" src="uirapuru.jpg" alt="Uirapuru" onMouseOver={uirapuru} />
        <p id="texto-1">Uirapuru</p>
        <img id="boto" src="boto.jpeg" alt="Boto" onMouseOver={boto} />
        <p id="texto-2">Boto cor de rosa</p>
        <img id="cobra" src="cobra.jpeg" alt="Cobra" onMouseOver={cobra} />
        <p id="texto-3">Cobra grande</p>
        <div className="curupira"><img id="curupira" src="curupira.jpeg" alt="Curupira" onMouseOver={curupira} /></div>
        <p id="texto-4">Curupira</p>
        <div className="historia" id="fundo-historia" onMouseOver={historia}><img id="historia" src="logo.png" alt="História" /></div>
        <p id="texto-5">História Genérica</p>
        <img id="mapinguari" src="mapinguari.jpeg" alt="Mapinguari" onMouseOver={mapinguari} />
        <p id="texto-6">Mapinguari</p>
        <img id="curupira-desenho" src="curupira-desenho.png" />
        <img id="saci-desenho" src="saci-desenho.png" />
        <img id="grama" src="grama.png" />
      </div>
      <div className="black-box" id="messageBox">
        <div className="background-image"></div>
        <img id="capa" src="logo.png" alt="Capa" />
        <p id="bem-vindo">Bem vindo ao Lendas Amazônicas</p>
        <p id="conheca">Conheça e compartilhe lendas!</p>
      </div>
    </div>
  );
};

export default HomePage;
