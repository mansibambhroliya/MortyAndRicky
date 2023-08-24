import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap';


function App() {
  let [val, setval] = useState([]);
  let [status, setstatus] = useState(false);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')

      .then(function (response) {
        // handle success
        // console.log(response.data.results);
        setval(response.data.results)
        setstatus(true)
      })
      .catch(function (error) {
        console.log(error);
      })
  })


  if (status) {
    return (
      <>
        <div className="head d-flex p-3 ">
          <div className=" go">
            <img src={require('./img/logo.jpeg')} width="50px" className='logo'></img>
          </div>
          <div className="nav d-flex align-items-center">
            <h5 className='pe-3'>Docs</h5>
            <h5>About</h5>
            <button className='main_btn ms-4 py-2'>Submit us</button>
          </div>
        </div>

        <div>
          <h1 className='ricky' align="center">The Ricky and Morty API</h1>
        </div>

        <div className="background spacer ">
          <div className="row container container-fluid m-auto">
            {
              val.map((item) => {
                return (
                  <>
                    <div className="col-md-6 col-12 p-4">
                      <div className="main_div d-flex bg-img" key={item.id}>
                        <div className="img">
                          <img src={item.image} alt="" width="220px"></img>
                        </div>

                        <div className="contain">
                          <div className="name font-name orande-hover">{item.name}</div>
                          <div className="name font-white">
                            <div className="d-flex align-items-center">
                              <div className="circle me-3 " style={item.status == "Alive" ? { backgroundColor: 'green' } : { backgroundColor: 'red' }} ></div>
                              {item.status} - {item.species}</div>
                          </div>
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
