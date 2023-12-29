const url =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&rows=10000";

const getBirths = async (url) => {
  try {
    const response = await axios.get(url);
    const records = response.data.records;
    let result = 0;
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const number = record.fields.nombre_total_cumule;
      result += number;
    }
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

const getTotalBirths = async (year) => {
  try {
    //Births by year
    const birthsByYearUrl = `${url}&refine.annee=${year}`;
    const yearResult = await getBirths(birthsByYearUrl);
    //Girls births
    const girlsBirthsUrl = `${birthsByYearUrl}&refine.sexe=F`;
    const girlsResult = await getBirths(girlsBirthsUrl);
    // Boys births
    const boysBirthsUrl = `${birthsByYearUrl}&refine.sexe=M`;
    const boysResult = await getBirths(boysBirthsUrl);
    // Return total, girls & boys births
    return { yearResult, girlsResult, boysResult };
  } catch (error) {
    console.log(error.message);
  }
};

export default getTotalBirths;
