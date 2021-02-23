// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Al Quran</h1>
        <Surahinfo></Surahinfo>
      </header>
    </div>
  );
}

function Surahinfo(){
  const surahStyle = {
    backgroundColor: '#E91E63',
    borderRadius: '10px',
    margin: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '5px 5px 10px gray',
    height: '400px',
    width: '700px',
    fontSize: '40px'
  }
  const [surahs, setSurahs] = useState([]);
 
  useEffect(() =>{
    fetch('http://api.alquran.cloud/v1/surah')
    .then(res => res.json())
    .then(data => setSurahs(data.data));

  }, [])
  
  return(
        <div>
          <h1>Al Quran: {surahs.length} (Surahs)</h1>
          <div>
            {
              surahs.map(sh => 
              <div style={surahStyle}>
                     Number:  {sh.number} <br></br> 
                     Arabic Name: {sh.name}<br></br> 
                     English Name: {sh.englishName}<br></br>
                     English Name Translation: {sh.englishNameTranslation}<br></br>
                     Number Of Ayahs: {sh.numberOfAyahs}<br></br> 
                     Revelation Type: {sh.revelationType}
              </div>)
            }
          </div>
        </div>
  )
}
export default App;
