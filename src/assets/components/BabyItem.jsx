const BabyItem = (props) => {
  const { name, number, ind } = props;

  return (
    <li>
      <p>
        <span>{ind + 1}</span> <span>{name}</span> <span>{number}</span>
      </p>
    </li>
  );
};

export default BabyItem;
