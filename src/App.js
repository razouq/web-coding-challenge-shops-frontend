import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NearbyShopsList from "./components/NearbyShopsList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <NearbyShopsList/>
    </div>
  );
}

export default App;
