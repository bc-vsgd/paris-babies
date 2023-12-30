import { useState } from "react";
import "./assets/css/App.css";
import Header from "./assets/components/Header";
import Form from "./assets/components/Form";
import BabiesList from "./assets/components/BabiesList";
import BirthsSummary from "./assets/components/BirthsSummary";
import Footer from "./assets/components/Footer";

function App() {
  // States
  const [userChoice, setUserChoice] = useState({
    // records: API array of objects containing 'fields' key, itself containing 'sexe', 'nombre', 'annee', 'nombre_total_cumule' and 'prenoms' keys
    records: [],
    // year, gender, number: user choices
    year: "",
    gender: "",
    number: "",
  });
  const [totalBirths, setTotalBirths] = useState({
    yearResult: 0,
    girlsResult: 0,
    boysResult: 0,
    year: 0,
  });

  return (
    <>
      <Header />
      <main className="container grey-border">
        <Form usestates={{ setUserChoice, setTotalBirths }} />
        <div className="display-names-div">
          {/* List of babies names */}
          {userChoice.records.length > 0 && <BabiesList data={userChoice} />}
          {/* Summary of number of births */}
          {totalBirths.year !== 0 && <BirthsSummary data={totalBirths} />}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
