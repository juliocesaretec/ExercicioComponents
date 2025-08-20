import './App.css';
import Header from './components/Header';
import Cartao from './components/Cartao';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Componentes</h1>
      <Header />
      <Cartao nome = "Richard Rios"
              profissão = "Jogador de Futebol"
              descrição = "Jogador do benfica tendo passagens pelo palmeiras e flamengo"
              foto = "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/07/AGIF24053019124244-scaled-aspect-ratio-512-320.jpg"/>
      <Footer/>
    </div>
  );
}

export default App;
