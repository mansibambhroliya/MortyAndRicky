import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap';


function App() {
  let [val,setval] = useState([]);
  let [status,setstatus] = useState(false);

  useEffect (() => {
    axios.get ('https://rickandmortyapi.com/api/character')

    .then(function (response) {
      // handle success
      console.log(response.data.results);
      setval(response.data.results)
      setstatus(true)
    })
    .catch(function (error) {
      console.log(error);
    })
    
  })

  // {item.status == "alive" ? item.status.backgroundColor:'green' : "item.status.backgroundColor :'red'  }

    
  
  if(status)
  {
    return (
      <>
        <div className="head d-flex p-3 ">
          <div className=" go">
              <img src={require('./img/logo.jpeg')} width="50px" className='logo'></img>
          </div>
          <div className="nav">
              <h4 className='pe-3'>Docs</h4>
              <h4>About</h4>
              
              <button className='main_btn ms-3'>Submit us</button>
          </div>
        </div>
          

         
        
        <div>
           <h1 className='ricky' align="center">The Ricky and Morty API</h1>           
        </div>

        <div className="background spacer">
         <div className="row gx-0">
          { 
            val.map((item) => {
              return (
                <>
                  {/* <img src={item.image} alt="" width="100px"></img>
                  <h1></h1> */}
                  
                    <div className="col-6 py-5 px-5">
                      <div className="main_div d-flex  bg-img">
                        <div className="img ">
                          <img src={item.image} alt="" width="220px"></img>                
                        </div>

                        <div className="contain">
                            <div className="name font-name orande-hover">{item.name}</div>
                            <div className="name font-white">
                              {/* <div className="circle" style={item.status == "alive" ? "hello" : "red"}></div> */}
                              
                            {item.status} - {item.species}</div>
                            <div className="name font-gray pt-2"> Last known location: </div>
                            <div className="name font-location font-white orande-hover">{item.origin.name}</div>
                            <div className="name font-gray pt-2"> First seen In: </div>
                            <div className="name font-location font-white orande-hover">{item.location.name}</div>

                        </div>
                      </div>
                    </div>
                    
            
                </>
              )
            })
          }
         </div>
        </div>
      </>
    )
  }



  return (
    <>
    
    <h1>load</h1>
    </>
  );
}

export default App;
