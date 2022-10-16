# taxiApp
Taxi App that displays rides and calculates the price of a ride.  <br />
The frontend in **React**, the chosen technology for the backend is **Express**.

The demo database containing the rides is in `server/db.json`. It initially contains the four rides of the given data.

To run the app, please make sure you have `node` installed. If not, you can install it with `sudo apt install npm` in your terminal.<br />

Then, open a terminal and navigate to the directory where the repository was cloned (`taxiApp` folder) and :
1. Navigate to the folder containing the server code with ` cd server` 
2. Install express with `npm install express`
3. Then start the server with `npm start`. You should see "Listening on port: 3001" if the operation was successful. <br/>
By default, the server will listen on port 3001 so make sure nothing else is running on this port before.

Now we need to run the React UI. To do so, please open a new terminal at the root folder of our project (ie. `taxiApp`), leaving the server running on your current terminal and :
1. Navigate to the directory containing the UI code with `cd taxi-app`
2. Install react with `npm install react`
3. Run the code with `npm start`. You should have a browser popping up at the adress `localhost:3000` and see the App.

If you want to run tests, primarily designed to unit test the function computing ride prices, you should:
1. Navigate to the folder containing the server code with ` cd server` 
2. Install **Jest** with `npm install jest`
3. Then run the command `npm test`. The results of the test will be logged in the terminal.

Note that the tests are located in `taxiApp/server/app.test.js`
