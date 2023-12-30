const BabyItem = (props) => {
  const { name, number, ind } = props;

  return (
    <li>
      <div>
        <p>
          <span>{ind + 1}</span> <span>{name}</span>
        </p>
        <span>{number}</span>
      </div>
    </li>
  );
};

export default BabyItem;
