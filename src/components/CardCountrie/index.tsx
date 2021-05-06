import styles from './style.module.scss';

interface CardCountrieProps{
  name: string;
  region: string;
  capital: string;
  population: number;
  flag: string;
}

const CardCountrie = ({
  name, region, capital, population, flag,
}: CardCountrieProps) => (
  <div className={styles.card}>
    <div className={styles.flag}>
      <img src={flag} alt="Flag" />
    </div>

    <div className={styles.info}>
      <h2>{name}</h2>
      <p>Population: {population.toLocaleString()}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </div>
  </div>
);

export default CardCountrie;
