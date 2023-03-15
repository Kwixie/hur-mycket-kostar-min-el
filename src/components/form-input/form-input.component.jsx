const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-row">
      <label htmlFor={label}>{label}</label>
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
