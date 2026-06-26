import styles from "./CountryItem.module.css";

function CountryItem({ city }) {
  const { country, emoji } = city;

  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h1 className={styles.countryName}>{country}</h1>
    </li>
  );
}

export default CountryItem;
