import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carrousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import * as dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{backgroundColor: '#141414'}}>
      <Menu />
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End?"}
      />

      {dadosIniciais.categorias.map(c => <Carrousel category={c} />)}

      <Footer />
    </div>
  );
}

export default Home;
