import React from "react";

export const Ride = (props) => {

  const [count, setCount] = React.useState(0);
  var date = new Date();
  date.setSeconds(Date.UTC(props.duration));
  const durationHhmmssFormat = date.toISOString().slice(11, 19);
  var endTime = new Date();
  endTime.setTime(new Date(props.startTime).getTime() + props.duration * 1000
    + endTime.getTimezoneOffset() * 60 * 1000);
  const handleClick = () => {
    setCount(count + 1)
    alert(
      durationHhmmssFormat + " - " + endTime

    );
  }
  return (
    <td
      onClick={handleClick}
      style={{
        backgroundColor: props.distance >= 2 ? 'red' : '',
        color: props.distance >= 2 ? 'white' : '',
      }}>
      <p>
        Ride {props.id} <br />
        Price : {props.price} EUR<br />
        {count > 0 ? "Clicked" : ""}
      </p>
    </td>

  );
}
