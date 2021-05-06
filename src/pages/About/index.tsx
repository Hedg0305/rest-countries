import { useParams, Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getCountry } from '../../services/api';

import styles from './style.module.scss';

interface Currency{
  code: string;
  name: string;
  symbol: string;
}

interface Language{
  name: string;
}

interface CountryInfo {
  name: string;
  nativeName: string;
  population: number;
  flag: string;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
}

const About = () => {
  const { id } = useParams<{ id: string }>();
  const [countrie, setCountrie] = useState<CountryInfo>();

  useEffect(() => {
    const loadInfo = async () => {
      const { data } = await getCountry(id);
      setCountrie(data[0]);
    };
    loadInfo();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <AiOutlineArrowLeft size={18} />
        back
      </Link>

      <div className={styles.infoContainer}>
        <div className={styles.flag}>
          <img src={countrie?.flag} alt="" />
        </div>

        <div className={styles.info}>
          <h2>{countrie?.name}</h2>

          <div className={styles.text}>
            <div className={styles.left}>
              <p>Native Name: </p> <p>{countrie?.nativeName}</p><br />
              <p>Population: </p> <p>{countrie?.population.toLocaleString() }</p><br />
              <p>Region: </p> <p>{countrie?.region}</p> <br />
              <p>Sub Region: </p> <p>{countrie?.subregion}</p> <br />
              <p>Capital: </p> <p>{countrie?.capital}</p><br />
            </div>

            <div className={styles.right}>
              <p>Top Level Domain: </p> <p>{countrie?.topLevelDomain}</p><br />
              <p>Currencies: </p> <p>{countrie?.population.toLocaleString()}</p><br />
              <p>Languages: </p> <p>{countrie?.flag}</p><br />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
