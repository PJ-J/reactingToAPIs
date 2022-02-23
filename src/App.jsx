import React, { useEffect, useState } from 'react';
import pic from 'C:/Source/reacting-to-apis/src/ghibli.jpg'

const App = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [loadFilms, setLoadFilms] = useState(false);
  const [loadPeople, setLoadPeople] = useState(false);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(allFilms => setFilms(allFilms))
  }, []);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then(res => res.json())
      .then(allPeople => setPeople(allPeople))
  }, []);

  const handleFilmToggle = () => {
    setLoadFilms(!loadFilms);
  };
  const handlePeopleToggle = () => {
    setLoadPeople(!loadPeople);
  };
  if (loadFilms) {
    return (

      <main className='container'>
        <button className='mt-2' onClick={handleFilmToggle} >Back to home</button>
        <section className='row justify-content-center mt-5'>
          {films.map(film => (
            <div className='col-md-6' key={film.id}>
              <div className='card shadow my-2'>
                <img src={film.image} className="card-img-top" alt="..." />
                <div className='card-body'>
                  <h4 className='card-title'>{film.title}</h4>
                  <p className='card-subtitle text-muted'>{film.original_title}</p>
                  <p className="card-text">{film.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    )
  } else if (loadPeople) {
    return (
      <main className='container'>
        <button className='mt-2' onClick={handlePeopleToggle}>Back to home</button>
        <section className='row justify-content-center mt-5'>
          {people.map(person => (
            <div className='col-md-6' key={person.id}>
              <div className='card shadow my-2'>
                <div className='card-body'>
                  <h4 className='card-title'>{person.name}</h4>
                  <p className='card-subtitle text-muted'>{person.gender}</p>
                  <p className="card-text">{person.age}</p>
                  <a href={person.url} class="card-link" target="_blank">Link to info</a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    )
  } else {
    return (
      <main className='container mt-5'>
        <img className='mx-auto d-block border shadow' src={pic} alt="" />
        <div className='row justify-content-center'>
          <h1 className='text-center mt-2'>Check out this Studio Ghibli stuff!</h1>
          <div className='col-md-6 text-center'>        <button className='btn-sm shadow' onClick={handleFilmToggle}>Load Films</button>
          </div>
          <div className='col-md-6 mb-2 text-center'>
            <button className='btn-sm shadow' onClick={handlePeopleToggle}>Load People</button>
          </div>
        </div>
        <div className='card text-center shadow my-2'>
                <div className='card-body'>
                  <h4 className='card-title'>Studio Ghibli API Lab</h4>
                  
                  <p className="card-text">This lab shows off my React skills.</p>
                 
                  <a href='https://www.google.com' class="card-link" target="_blank">Link to info</a>
                </div>
              </div>
      </main>
    )
  }
}
export default App;