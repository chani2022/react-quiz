export const NextButton = ({ disabled, onClick }) => {
    return (
        <div className="d-flex justify-content-end my-2">
            <button type="button" className="btn btn-primary" onClick={onClick} disabled={disabled}>Question suivant</button>
        </div>
    )
}