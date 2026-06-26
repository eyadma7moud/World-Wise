import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLosding }) {
  if (isLosding) return <Spinner />;

  if(!cities.length) return <Message message={'No cities found'}/>

  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CountryItem city={city} key={city.id}/>
      ))}
    </ul>
  );
}

export default CountryList;
