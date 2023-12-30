import getNames from "../js/getNames";
import getTotalBirths from "../js/getTotalBirths";

const Form = (props) => {
  const { setUserChoice, setTotalBirths } = props.usestates;
  // Years array
  const years = [];
  for (let i = 2004; i < 2023; i++) {
    years.push(i);
  }

  return (
    <form>
      <div className="container grey-border">
        <div>
          <label>Choisissez une année</label>
          <select name="year" id="year-select">
            {years.map((year, ind) => {
              return (
                <option value={year} key={ind}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Choisissez le sexe</label>
          <select name="gender" id="gender-select">
            <option value="girl">Fille</option>
            <option value="boy">Garçon</option>
            <option value="both-genders">Les deux</option>
          </select>
        </div>
        <div>
          <label>Nombre de prénoms à afficher</label>
          <select name="number" id="number-select">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <div>
          <button
            id="btn"
            onClick={async (event) => {
              event.preventDefault();
              // Get the values of selects
              const year = document.querySelector("#year-select").value;
              let gender = document.querySelector("#gender-select").value;
              if (gender === "boy") {
                gender = "M";
              } else if (gender === "girl") {
                gender = "F";
              }
              const number = document.querySelector("#number-select").value;

              // Get API data
              // Get names by year & by gender
              const data = await getNames(year, gender, number);
              setUserChoice({
                records: data.records,
                year: year,
                gender: gender,
                number: number,
              });
              // Get total births (by year & by gender)
              const { yearResult, girlsResult, boysResult } =
                await getTotalBirths(year);
              setTotalBirths({
                yearResult,
                girlsResult,
                boysResult,
                year,
              });
            }}
          >
            Afficher
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
