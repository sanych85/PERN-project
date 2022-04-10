
import { observer } from 'mobx-react-lite';
import { useContext,useEffect,useState } from 'react';
import { Spinner } from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom'
import { Context } from '.';
import AppRouter from './components/Approuter';
import NavBar from './components/Navbar';
import { check } from './http/userApi';

const App = observer(()=> {
  const {user} = useContext(Context)
  const [loading, setLoading ] = useState(true)
  useEffect(()=> {
      check().then(data=>{
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(()=>setLoading(false))
      
  }, [])
  if(loading) {
    return <Spinner animation = {'grow'}/>
  }
  return (
    <BrowserRouter>
       <NavBar/>
        <AppRouter/>
    </BrowserRouter>
  );
})

export default App;
