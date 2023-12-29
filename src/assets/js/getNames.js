// GET API DATA

const parisUrl =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&sort=nombre_total_cumule";

const getNames = async (year, gender, number) => {
  try {
    let url = `${parisUrl}&rows=${number}&refine.annee=${year}`;
    if (gender === "M" || gender === "F") {
      url += `&refine.sexe=${gender}`;
    }
    const response = await axios.get(url);
    // console.log("getNames.js", response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export default getNames;
