import ScheduleService from "../../services/scheduleService/ScheduleService";
import { useNavigate, useParams } from "react-router-dom";
import React, { useRef, useState } from "react";
import { Button, notification, Space } from "antd";

const AddSchedule = () => {
  const [api, contextHolder] = notification.useNotification();

  // const initialScheduleState = {
  //   id: null,
  //   HourAndMinutes: "",
  //   idLine: "",
  //   published: false
  // };
  const navigate = useNavigate();
  const { idLine } = useParams();
  const schedulesRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);



  const saveSchedule = () => {
    var data = {
      HourAndMinutes: schedulesRef.current.value === '' ? null : schedulesRef.current.value,
      idLine: idLine
    };

    const time = schedulesRef.current.value

    if(time === null|| time === ''){
      notification.error({message:'error',description:'rellena todos los campos', duration: 5})
    }else{
    ScheduleService.create(data)
      .then(response => {
        navigate(`/Line/${idLine}/schedule`)
      })
    }
  };
  return (
    <div>
      <div className="bodyAddLine">
        <form className="form-group" >
          <label htmlFor="number">Hora y minuto</label>
          <input
            type="time"
            className="form-control"
            id="HourAndMinutes"
            required
            name="number"
            ref={schedulesRef}
            defaultValue={null}
          />
          <Button onClick={saveSchedule} className="btn btn-success">
            Guardar
          </Button>
          <Button onClick={() => navigate(`/Line/${idLine}/schedule`)} className="btn-denegade">
            Cancelar
          </Button>
        </form>
      </div>
    </div>
  )

}
export default AddSchedule