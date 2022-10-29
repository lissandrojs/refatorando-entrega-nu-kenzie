import "../../reset.css";


const Button = ({ className, eventClick, Children, id }) => {
  return (
    <button 
      id={id} 
      className={className} 
      onClick={eventClick}>

      {Children}

    </button>
  );
};
export default Button;
