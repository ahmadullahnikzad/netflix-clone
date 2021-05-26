import React from 'react';
import requests from './requests';
import Header from './Header';
import Row from './Row';
import Nav from './Nav';

function App() {
  return (
    <div className="bg-black text-gray-100 m-0">
      <Nav/>
      <Header/>
      <Row title='Netflix Originals' fetchUrl={ requests.fetchNetflixOriginals } isLarge/>
      <Row title='Trending Now' fetchUrl={ requests.fetchTrending }/>
      <Row title='Top Rated' fetchUrl={ requests.fetchToRated }/>
      <Row title='Action Movies' fetchUrl={ requests.fetchActionMovies }/>
      <Row title='Comedy Movies' fetchUrl={ requests.fetchComedyMovies }/>
      <Row title='Horror Movies' fetchUrl={ requests.fetchHorrorMovies }/>
      <Row title='Romance Movies' fetchUrl={ requests.fetchRomanceMovies }/>
      <Row title='Documentaries' fetchUrl={ requests.fetchDocumentaries }/>
    </div>
  );
}

export default App;
