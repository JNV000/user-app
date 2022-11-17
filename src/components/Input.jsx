import PropTypes from "prop-types";
export default function Input({ label }) {
  return (
    <div>
      <label className="sr-only" htmlFor={label}>
        {label}
      </label>
      <input className="border" id={label} />
    </div>
  );
}
Input.propTypes = {
  label: PropTypes.string.isRequired,
};
