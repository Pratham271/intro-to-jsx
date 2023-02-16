// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   createBrowserRouter,
//   Outlet,
//   RouterProvider,
// } from "react-router-dom";


// let name = "Pratham"
function App() {
  const [mode,setMode] = useState('light')
  const [enableMode,setEnableMode] = useState('Dark')
  const [alert, setAlert] = useState(null)

  // const AppLayout = () => {
  //   <>
      
  //     {/* <Outlet/> */}
  //     {/* <Alert alert={alert}/> */}
  //   </>
  // }
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },1500)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setEnableMode('Light')
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setEnableMode('Dark')
      showAlert("Light mode has been enabled","success")

    }
  }

  // const router = createBrowserRouter([
  //         {
  //           path: "/",
  //           element: ,
  //         },
  //         {
  //           path:"/about",
  //           element : <About/>
  //         }
    
  // ]);



  return (
  <>

    
    <Navbar title="TextUtils2" aboutText="About" mode={mode} toggleMode={toggleMode} enableMode={enableMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <RouterProvider router={router} />*/}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    </div>

  </>
  );
}

export default App;
