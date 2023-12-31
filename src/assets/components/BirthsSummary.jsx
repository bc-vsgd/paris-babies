const BirthsSummary = (props) => {
  const { yearResult, girlsResult, boysResult, year } = props.data;

  return (
    <div className="births-summary">
      <p className="p-margin-right">
        {yearResult} bébés sont nés en {year} :
      </p>
      <p>{girlsResult} filles</p>
      <p className="xs-hidden md-visible p-margin"> et </p>
      <p>{boysResult} garçons</p>
    </div>
  );
};

export default BirthsSummary;
