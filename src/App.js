import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NearbyShopsList from "./components/NearbyShopsList";
import Navbar from "./components/Navbar";
import PreferredShopsList from "./components/PreferredShopsList";

function App() {
  return (
    <div>
      <Navbar/>
      <PreferredShopsList/>
    </div>
  );
}

export default App;
