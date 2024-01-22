import './App.css';
import { Main } from './App.styles';
import MainView from './View/MainView/MainView';
import SideBar from './View/SideBar/SideBar';

function App() {
  return (
    <Main>
      <SideBar></SideBar>
      <Main>
        <MainView></MainView>
      </Main>
    </Main>
  );
}

export default App;
