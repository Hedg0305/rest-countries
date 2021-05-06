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
              <p className={styles.title}>Native Name: </p>
              <p>{countrie?.nativeName}</p><br />

              <p className={styles.title}>Population: </p>
              <p>{countrie?.population.toLocaleString()}</p><br />

              <p className={styles.title}>Region: </p>
              <p>{countrie?.region}</p> <br />

              <p className={styles.title}>Sub Region: </p>
              <p>{countrie?.subregion}</p> <br />

              <p className={styles.title}>Capital: </p>
              <p>{countrie?.capital}</p><br />
            </div>

            <div className={styles.right}>
              <p className={styles.title}>Top Level Domain: </p>
              <p>{countrie?.topLevelDomain}</p><br />

              <p className={styles.title}>Currencies: </p>
              {countrie?.currencies.map((currencie, index, array) => {
                return (
                  <span key={currencie.name}>
                    {currencie.name}{array[index + 1] ? ', ' : '.'}
                  </span>
                );
              })}
              <br />

              <p className={styles.title}>Languages:</p>
              {countrie?.languages.map((language, index, array) => {
                return (
                  <span key={language.name}>
                    {language.name}{array[index + 1] ? ', ' : '.'}
                  </span>
                );
              })}<br />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
