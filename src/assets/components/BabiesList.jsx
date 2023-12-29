import BabyItem from "./BabyItem";

const BabiesList = (props) => {
  // props.data = userChoice, containing:
  // records: API array ('records') of objects containing 'fields' key, itself containing 'sexe', 'nombre', 'annee', 'nombre_total_cumule' and 'prenoms' keys
  // year, gender & year: user choices

  const data = props.data;
  const records = data.records;
  const year = data.year;
  let gender = data.gender;
  if (gender === "F") {
    gender = "féminins";
  } else if (gender === "M") {
    gender = "masculins";
  } else gender = "des deux sexes";
  const number = data.number;

  return (
    <ul>
      <p>{`Les ${number} prénoms ${gender} les plus donnés à Paris en ${year}`}</p>
      {records.map((record, ind) => {
        return (
          <BabyItem
            name={record.fields.prenoms}
            number={record.fields.nombre_total_cumule}
            key={ind}
            ind={ind}
          />
        );
      })}
    </ul>
  );
};

export default BabiesList;
