const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label>{label}</label>
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
