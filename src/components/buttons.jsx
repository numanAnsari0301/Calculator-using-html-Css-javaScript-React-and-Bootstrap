const Btns = ({ onButtonClick }) => {
  const btnsName = [
      '%','**',
    '1','2','*',
    '3','4','/',
    '5','6','+',
    '7','8','-',
    '9','0',
  ];

  return (
    <div className="btn-container">
       <button 
        className="btn Clear" 
        id="Clear"
        onClick={() => onButtonClick("C")}
      >
        C
      </button>
      {btnsName.map((btn) => (
        <button 
          className="btn" 
          key={btn}
          onClick={() => onButtonClick(btn)}
        >
          {btn}
        </button>
      ))}
      <button 
        className="btn equal" 
        onClick={() => onButtonClick("=")}
      >
        =
      </button>
    </div>
  );
};

export default Btns;
