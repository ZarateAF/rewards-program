import { useEffect, useState } from "react";
import { getRecordedPurchase } from "../services/data";
import Row from "./components/Row";
import Table from "./components/Table";

const Rewards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const setInformation = async () => {
      const info = await getRecordedPurchase();
      setData(info);
    };
    setInformation();
  }, []);

  if (data.length === 0) return <h1>Loading...</h1>;

  return (
    <Table>
        {data.map((t) => (
          <Row {...t} key={`i_${t.idTransaction}`} />
        ))}
    </Table>
  );
};

export default Rewards;
