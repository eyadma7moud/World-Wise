import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
    const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

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
