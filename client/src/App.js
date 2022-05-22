import { useEffect, useState } from 'react';
import PokemonDetails from './components/PokemonDetails';
import PokemonNotFound from './components/PokemonNotFound';
import { getPokemonData } from './components/utils.js/getPokemonData';
import RecentSearches from './components/RecentSearches';
import './styles/styles.scss';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState();
  const [isFound, setIsFound] = useState(true);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const addToRecent = (pokemonName) => {
    const recent = JSON.parse(localStorage.getItem('recentSearches'));
    const updated = recent ? [...recent, pokemonName].slice(-5) : [pokemonName];
    localStorage.setItem('recentSearches', JSON.stringify(updated));
    setRecentSearches(updated);
  };

  useEffect(() => {
    const recent = JSON.parse(localStorage.getItem('recentSearches'));
    setRecentSearches(recent);
  }, []);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    try {
      const pokemon = query.toLowerCase();
      addToRecent(pokemon);
      const data = await getPokemonData(pokemon);

      setIsFound(true);
      setData(data);
      setIsLoading(false);
      setQuery('');
    } catch (error) {
      setIsFound(false);
      setIsLoading(false);
      setQuery('');
    }
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="left-container">
          <div className="search-bar">
            <form onSubmit={handleSubmit}>
              <div className="search-bar-inner">
                <input
                  className="search-input"
                  placeholder="Pokemon name..."
                  value={query}
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="details">
            {isLoading ? (
              <div className="loading">
                <h1>Searching Pokemon...</h1>
              </div>
            ) : isFound ? (
              <PokemonDetails data={data} />
            ) : (
              <PokemonNotFound />
            )}
          </div>
        </div>
        <RecentSearches
          submit={handleSubmit}
          setQuery={setQuery}
          recent={recentSearches}
        />
      </div>
    </div>
  );
}

export default App;
