import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import storeData from './storeData.json'; 

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('Tohoku'); // 初期値として東北を選択

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <>
      <h1>店舗情報</h1>
      <label htmlFor="Region">地域を選択</label>
      <select onChange={handleRegionChange} value={selectedRegion}>
        <option value="Tohoku">東北</option>
        <option value="Kanto">関東</option>
        <option value="Kansai">関西</option>
      </select>

      <>
        {storeData.regions[selectedRegion].map((store, index) => (
          <>
            <h2>{store.storeName}</h2>
            <p>住所: {store.address}</p>
            <p>電話: {store.phoneNumber}</p>
          </>
        ))}
      </>
    </>
  );
};

export default App;