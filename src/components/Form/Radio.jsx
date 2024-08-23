export const Radio = ({ label, value, onChange, response }) => {
    return (
        <div className="form-check">
            <input className="form-check-input"
                type="radio" name="flexRadioDefault" id={value} value={value} onChange={onChange} disabled={response !== ""} />
            <label className="form-check-label" htmlFor={value}>
                {label}
            </label>
        </div>
    )
}