import React from "react";

function ConfigurationForm({ inputs, setInputs, errors, setErrors }) {
  const handleInputChange = (e, field) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
      setInputs((prevInputs) => ({
        ...prevInputs,
        [field]: value === "" ? "" : Math.max(1, parseInt(value, 10)).toString(),
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "Please enter a valid number.",
      }));
    }
  };

  return (
    <form className="input-form">
      <div className="form-group">
        <label>Total Tickets:</label>
        <input
          type="text"
          value={inputs.totalTickets}
          onChange={(e) => handleInputChange(e, "totalTickets")}
          placeholder="Enter total number of tickets"
          required
        />
        {errors.totalTickets && <p className="error-message">{errors.totalTickets}</p>}
      </div>
      <div className="form-group">
        <label>Release Rate (tickets per second):</label>
        <input
          type="text"
          value={inputs.releaseRate}
          onChange={(e) => handleInputChange(e, "releaseRate")}
          placeholder="Enter release rate"
          required
        />
        {errors.releaseRate && <p className="error-message">{errors.releaseRate}</p>}
      </div>
      <div className="form-group">
        <label>Purchase Rate (customers per second):</label>
        <input
          type="text"
          value={inputs.retrievalRate}
          onChange={(e) => handleInputChange(e, "retrievalRate")}
          placeholder="Enter retrieval rate"
          required
        />
        {errors.retrievalRate && <p className="error-message">{errors.retrievalRate}</p>}
      </div>
      <div className="form-group">
        <label>Maximum Ticket Capacity:</label>
        <input
          type="text"
          value={inputs.maxCapacity}
          onChange={(e) => handleInputChange(e, "maxCapacity")}
          placeholder="Enter maximum ticket capacity"
          required
        />
        {errors.maxCapacity && <p className="error-message">{errors.maxCapacity}</p>}
      </div>
    </form>
  );
}

export default ConfigurationForm;
