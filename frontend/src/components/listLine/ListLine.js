import React, { useState, useEffect } from "react";
import LineService from "../../services/linesServices/LineService";
import { useNavigate } from "react-router-dom";

const LineList = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  const navigate=useNavigate()

  useEffect(() => {
    retrieveLines();
  }, []);


  const retrieveLines = () => {
    LineService.getAll()
      .then(response => {
        setLines(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


const deleteLine =(id)=>{
  LineService.remove(id).then(response=>{
    retrieveLines();
  })
  LineService.getAll()
}

const updateLine=(l)=>{
  localStorage.setItem("linea",JSON.stringify(l))
  navigate("/update")
}

  return (
    <div>
      {lines.map((l,index)=>{
        return(
          <div key={index}>
            <h3>línea:{l.number}</h3>
            <p>{l.firstStop}</p>
            <p>{l.lastStop}</p>
            <button onClick={()=>deleteLine(l.id)}>Eliminar</button>
            <button onClick={()=>updateLine(l)}>Actualizar</button>
          </div>
        )
      })}
    </div>
  );
};

export default LineList