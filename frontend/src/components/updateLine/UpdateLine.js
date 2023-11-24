import React, { useState } from "react";
import "./UpdateLine.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LineService from "../../services/linesServices/LineService";
import { useNavigate } from "react-router-dom";

const UpdateLine = () => {
    const l =JSON.parse(localStorage.getItem("linea"))
    const navigate=useNavigate()

    const initialLineState = {
        id: l.id,
        number: l.number,
        firstStop: l.firstStop,
        lastStop: l.lastStop,
        published: false
    };
    const [line, setLine] = useState(initialLineState);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setLine({ ...line, [name]: value });
    };

    const UpdateLineSelected =(id)=>{
        var data = {
            number: line.number,
            firstStop: line.firstStop,
            lastStop: line.lastStop
    }; 

    LineService.update(l.id,data)
    .then(response => {
      setLine({
        id: response.data.id,
        number: response.data.number,
        firstStop: response.data.firstStop,
        lastStop: response.data.lastStop,
        published: response.data.published
      });
    })
    LineService.getAll()
    navigate("/")
    }

    return (
      <div>
        <Header/>
        <div className="bodyUpdateLine">
          <div className="form-group">
            <label htmlFor="number">Número</label>
            <input
              type="number"
              className="form-control"
              id="number"
              required
              value={line.number}
              onChange={handleInputChange}
              name="number"
            />
          </div>
    
          <div className="form-group">
            <label htmlFor="firstStop">Primera parada</label>
            <input
              type="text"
              className="form-control"
              id="firstStop"
              required
              value={line.firstStop}
              onChange={handleInputChange}
              name="firstStop"
            />
          </div>
    
          <div className="form-group">
            <label htmlFor="lastStop">Ultima parada</label>
            <input
              type="text"
              className="form-control"
              id="lastStop"
              required
              value={line.lastStop}
              onChange={handleInputChange}
              name="lastStop"
            />
          </div>
    
          <button onClick={UpdateLineSelected} className="btn btn-success">
            Submit
          </button>
        </div>
        <Footer/>
      </div>
      )}
    
    
    export default UpdateLine