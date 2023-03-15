import { useState, useContext, useEffect } from "react";
import { ElprisContext } from "../../contexts/elpris.context";
import POWER_DATA from "../../power-data";

const defaultFormFields = {
  powerInput: 5000,
  timeInput: 0,
  selectedOption: "bastu",
};

const SparkalkylatorItem = ({
  objOfSavings,
  setObjOfSavings,
  id,
  fields,
  setFields,
  field,
}) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { powerInput, timeInput } = formFields;

  const [calculatedSavings, setCalculatedSavings] = useState(0);
  const { pricePerKwh } = useContext(ElprisContext);
  console.log(objOfSavings);

  const sortedPowerData = [...POWER_DATA];
  sortedPowerData.sort((a, b) => {
    let fa = a.device.toLowerCase(),
      fb = b.device.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    setCalculatedSavings(
      Math.round(
        ((formFields.powerInput * (formFields.timeInput / 60) * pricePerKwh) /
          1000) *
          100
      ) / 100
    );
  }, [formFields, pricePerKwh]);

  useEffect(() => {
    setObjOfSavings({ ...objOfSavings, [id]: calculatedSavings });
  }, [calculatedSavings, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const handleChangeSelect = (e) => {
    if (e.target.value === "anpassad") {
      setFormFields({
        ...formFields,
        powerInput: 0,
      });
      return;
    }
    setFormFields({
      ...formFields,
      powerInput: sortedPowerData[e.target.options.selectedIndex].power,
    });
  };

  const deleteHandler = () => {
    setFields(fields.filter((el) => el.id !== field.id));
    const newObject = { ...objOfSavings };
    delete newObject[id];
    setObjOfSavings(newObject);
  };

  return (
    <div className="sparkalkylator-form-item">
      <div className="first-form-row">
        <select onChange={handleChangeSelect}>
          {sortedPowerData.map((device) => {
            return (
              <option
                name="selectedOption"
                key={device.id}
                value={device.device}
              >
                {device.device}
              </option>
            );
          })}
          <option name="selectedOption" value="anpassad">
            Anpassa själv
          </option>
        </select>
        <div className="delete">
          <button onClick={deleteHandler}>
            <i className="material-icons">close</i>
          </button>
          <p>{calculatedSavings} kr</p>
        </div>
      </div>
      <div className="input-values">
        <div className="effekt">
          <label htmlFor="powerInput"> Effekt</label>
          <input
            type="number"
            value={powerInput}
            name="powerInput"
            id="powerInput"
            onChange={handleChange}
          />
        </div>
        <div className="tid">
          <label htmlFor="timeInput"> Tid i minuter</label>
          <input
            type="number"
            value={timeInput}
            name="timeInput"
            id="timeInput"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SparkalkylatorItem;

// useContext: isSubmitTrue, arrayCalculatedSavingDevice,
// du sparar
