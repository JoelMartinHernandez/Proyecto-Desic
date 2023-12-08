import "./Lines.css";
import React, { useState, useEffect } from "react";
import LineService from "../../../services/linesServices/LineService";
import { useNavigate } from "react-router-dom";

const LinesU = () => {
  const [lines, setLines] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    retrieveLines();
  }, []);

  const retrieveLines = () => {
    LineService.getAll()
      .then(response => {
        setLines(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };



  return (
    <div className="listBodyU">
      {lines.map((l, index) => {
        return (
          <div key={index} className="elementBodyU" >
            <div className="buttonScheduleU" onClick={() => navigate(`/user/Line/${l.id}/Schedule`)}>
              <h3>línea:{l.number}</h3>
              <p>{l.firstStop} - {l.lastStop}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default LinesU