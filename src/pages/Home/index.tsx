import React, { useEffect, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

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
  const [filterByName, setFilterByName] = useState('');
  const [filterByRegion, setFilterByRegion] = useState('');

  useEffect(() => {
    const loadHome = async () => {
      const { data } = await getAllCountries();
      setCountries(data);
    };
    loadHome();
  }, []);

  const hadleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setFilterByName(event.target.value);
  };

  const hadleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setFilterByRegion(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        <input
          type="text"
          name="countrie"
          id="countrie"
          placeholder="Search for a country"
          onChange={hadleInputChange}
        />

        <div className={styles.selectBox}>
          <RiArrowDownSLine
            size={24}
            color="white"
          />

          <select name="region" id="region" onChange={hadleSelectChange}>
            <option
              value=""
              disabled
              selected
            >Filter by region
            </option>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>

          </select>
        </div>
      </div>

      <div className={styles.cards}>
        {countries?.filter((countrie) => {
          return countrie.name.toLowerCase().includes(filterByName.toLowerCase())
            && countrie.region.includes(filterByRegion);
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
