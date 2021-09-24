import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <h2>Próximamente...</h2>
      <ItemListContainer text="Tu carro" number={1}/>
      <ItemListContainer text="Tu carro" number={0}/>
    </>
  );
}

export default App;
