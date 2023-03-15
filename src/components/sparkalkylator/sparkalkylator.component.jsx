import { useState } from "react";
import SparkalkylatorItem from "./sparkalkylator-item.component";
import "./sparkalkylator.styles.scss";

const Sparkalkylator = () => {
  const [objOfSavings, setObjOfSavings] = useState({});
  const [sumAllSavings, setSumAllSavings] = useState(0);
  const [fields, setFields] = useState([{ id: Math.random() * 1000 }]);

  const handleClick = () => {
    setFields([...fields, { id: Math.random() * 1000 }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSumAllSavings(() => {
      return Object.values(objOfSavings).reduce((a, b) => a + b, 0);
    });
  };

  console.log(fields);

  return (
    <div>
      <h1 className="sparkalkylator-heading">Sparkalkylator</h1>
      <p>
        Nedan kan du räkna ihop hur mycket du skulle kunna spara genom att välja
        apparat i listan och fylla i tiden i minuter. Ändra effekt-värdet om din
        apparat drar mer eller mindre ström än det förinställda snittvärdet.{" "}
      </p>
      <div className="sparkalkylator-form">
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <SparkalkylatorItem
              id={field.id}
              key={field.id}
              objOfSavings={objOfSavings}
              setObjOfSavings={setObjOfSavings}
              fields={fields}
              setFields={setFields}
              field={field}
            />
          ))}
          <button className="btn-add" type="button" onClick={handleClick}>
            <i className="material-icons">add</i>
          </button>
          <div>
            <button className="btn-calculate" type="submit">
              BERÄKNA
            </button>
            <p className="sum-all">{Math.round(sumAllSavings * 10) / 10} kr</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sparkalkylator;
