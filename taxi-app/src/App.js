import './App.css';
import React from "react";
import { Ride } from './components/Ride';

const App = () => {
  const [rides, setRides] = React.useState([]);

  React.useEffect(() => {
    document.title = "Paris Taxi App"
    fetch("/rides")
      .then((res) => res.json())
      .then((data) => { setRides(data) });
  }, []);
  const resultList = (rides || []).map((ride) =>
    <tr key={ride.id}>
      <Ride
        id={ride.id}
        distance={ride.distance}
        startTime={ride.startTime}
        duration={ride.duration}
        price={ride.price} />
    </tr>


  );

  return (
    <div className="App">
      <header className='App-header'>Paris Taxi rides</header>
      Click on a ride to display its duration & end time.
      <table>
        <tbody className='ride'>
          {resultList}
        </tbody>
      </table>


    </div>
  );
}

export default App;
