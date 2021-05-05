import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const loadHome = async () => {
      const { data } = await getAllCountries();
      setCountries(data);
    };
    loadHome();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        <input type="text" name="countrie" id="countrie" />
      </div>

      <div className={styles.cards}>
        {countries?.map((countrie) => (
          <CardCountrie
            name={countrie.name}
            flag={countrie.flag}
            population={countrie.population}
            region={countrie.region}
            capital={countrie.capital}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
