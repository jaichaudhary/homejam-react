import React from "react";
import "./App.css";
import request from "./Components/request.js";
import Row from "./Components/Row.js";
import Review from "./Components/Review.js";
import Banner from "./Components/Banner.js";
import Footer from "./Components/Footer.js";
import Navbar from "./Components/Navbar.js";
function App() {
  const temp = `${request[0].image}`;
  console.log(temp);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Row title="Upcoming Shows"></Row>
      <Review title="Reviews"></Review>
      <Footer></Footer>
    </div>
  );
}

export default App;
