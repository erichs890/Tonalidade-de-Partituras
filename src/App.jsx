
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import KeyIdentifier from './components/KeyIdentifier';
import ResultCard from './components/ResultCard';

function App() {
  const [resultData, setResultData] = useState(null);

  const handleSearchSelect = (data) => {
    setResultData(data);
  };

  const handleIdentifierResult = (data) => {
    setResultData(data);
  };

  return (
    <div className="app-container">
      <Header />

      <main>
        <Search onSelect={handleSearchSelect} />

        <KeyIdentifier onIdentify={handleIdentifierResult} />

        <div style={{ minHeight: '400px' }}>
          <ResultCard data={resultData} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
