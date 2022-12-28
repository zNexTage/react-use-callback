import './App.css';
import PythagorasCalculus from './components/pythagoras-calculus';
import TriangleImg from './assets/triangle.png';

function App() {
  
  return (
    <div className='App'>
      <img
        style={{ maxWidth: 500 }}
        src={TriangleImg}
        alt="Imagem de um triângulo retângulo" />
      <PythagorasCalculus />
    </div>
  );
}

export default App;
