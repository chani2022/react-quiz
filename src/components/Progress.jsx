export const Progress = ({ value, max }) => {
    return (
        <>
            <label htmlFor="file">{value + 1}/{max}</label>
            <progress id="file" value={value + 1} max={max}> {(value + 1) * 100 / max} </progress>
        </>
    )
}