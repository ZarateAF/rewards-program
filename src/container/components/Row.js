import { memo } from "react";
import { rewardCalculated } from "../util";

const Row = ({ idTransaction, price }) => {
  const reward = rewardCalculated(price);

  return (
    <tr>
      <td>{idTransaction}</td>
      <td>{price}</td>
      <td>{reward}</td>
    </tr>
  );
};

export default memo(Row);
