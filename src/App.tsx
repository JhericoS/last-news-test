import React from 'react';
import NewsList from './components/NewsList/NewsList';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Últimas Noticias</h1>
      <NewsList />
    </div>
  );
};

export default App;
