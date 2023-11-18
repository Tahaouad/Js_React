import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const students = [{
          name:"Oussama",
          prenom:"afassi",
          age : 18,
          skils : ['python',"html",'css']

      },
      {
        name:"Taha",
        prenom:"ouad",
        age : 18,
        skils : ['python',"html",'css']

      
      },
      {
        name:"Allaoui",
        prenom:"Achraf",
        age : 19,
        skils : ['python',"html",'css']

      }
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    students.map( (et) => {
      return(
        <div>
        <p>Nom : {et.name}</p>
        <p> Prenom : {et.prenom}</p>
        <p> Age : {et.age}</p>
        <p> Skils : { et.skils }</p>
        <br></br>
        </div>
      )
    }
)
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
