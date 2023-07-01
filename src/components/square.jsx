import'../index';

const Square = ({value, onClick}) => {
    return (
        <button className="square" onClick={onClick}> {value} </button>
    )
}

export default Square;