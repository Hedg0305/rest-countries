import React, { useEffect, useState } from 'react';
import CardCountrie from '../../components/CardCountrie';
import { getAllCountries } from '../../services/api';
import styles from './style.module.scss';

interface Countrie{
  name: string;
  region: string;
  capital: string;
  population: number;
  flag: string;
}

const Home = () => {
  const [countries, setCountries] = useState<Countrie[]>();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const loadHome = async () => {
      const { data } = await getAllCountries();
      setCountries(data);
    };
    loadHome();
  }, []);

  const hadleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        <input
          type="text"
          name="countrie"
          id="countrie"
          placeholder="Search for a country"
          onChange={hadleChange}
        />

        <select name="region" id="region">
          <option
            value=""
            disabled
          >Filter by region
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

      </div>

      <div className={styles.cards}>
        {countries?.filter((countrie) => {
          return countrie.name.toLowerCase().includes(filter.toLowerCase());
        })
          .map((countrie) => (
            <CardCountrie
              name={countrie.name}
              flag={countrie.flag}
              population={countrie.population}
              region={countrie.region}
              capital={countrie.capital}
              key={countrie.name}
            />

          ))}

      </div>
    </div>
  );
};

export default Home;
