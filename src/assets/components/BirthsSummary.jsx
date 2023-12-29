const BirthsSummary = (props) => {
  const { yearResult, girlsResult, boysResult, year } = props.data;

  return (
    <div>
      <p>
        {yearResult} bébés sont nés en {year}
      </p>
      <p>{girlsResult} filles</p>
      <p>{boysResult} garçons</p>
    </div>
  );
};

export default BirthsSummary;
