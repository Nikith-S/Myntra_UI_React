
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import FetchItems from '../components/FetchItems';
import { useSelector } from 'react-redux';
import Loadingspinner from '../components/LoadingSpinner'

function App() {
  const fetchStatus = useSelector(store => store.fetchStatus)

  return (
   <>
   <Header/>
   <FetchItems/>
   {fetchStatus.currentlyFetching ? <Loadingspinner/> :  <Outlet/>}
  
    <Footer/>
   
   </>
  );
}

export default App;
