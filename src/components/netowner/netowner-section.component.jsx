import { useContext, useState } from "react";
import "./netowner-section.styles.scss";
import { ElprisContext } from "../../contexts/elpris.context";

const Netowner = () => {
  const { setNetOwnerPrice } = useContext(ElprisContext);
  const [formField, setFormField] = useState(0);

  const handleChange = (event) => {
    const { value } = event.target;

    setFormField(value);
  };

  const newNetOwnerPrice = (value) => {
    setNetOwnerPrice(Number(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newNetOwnerPrice(formField);
  };

  return (
    <div>
      <section className="netowner-section" id="netowner-section">
        <div className="text-container">
          <p>
            De beräknade värdena på denna sidan inkluderar energiskatt, moms och
            en genomsnittlig nätöverföringsavgift på 25 öre/kWh.
          </p>
          <p>
            Kostnaden för nätöverföring kan variera mycket beroende på avtal och
            om man bor i villa eller lägenhet. Kolla på din senaste
            elnätsfaktura och leta efter något som kallas nätöverförings- eller
            elöverföringsavgift.
          </p>
          <form onSubmit={handleSubmit} className="input-field">
            <div className="input-row">
              <label>Anpassa nätägaravgiften i kr per kWh </label>
              <div className="input-and-btn">
                <input
                  type="text"
                  name="netOwnerPrice"
                  onChange={handleChange}
                  value={formField}
                />
                <button>Anpassa</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Netowner;
