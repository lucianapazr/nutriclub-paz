import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <NavBar />
      <h2>Próximamente...</h2>
      <ItemListContainer text="Tu carro" number={1}/>
      <ItemListContainer text="Tu carro" number={0}/>
      <ItemCount/>
    </>
  );
}

export default App;
