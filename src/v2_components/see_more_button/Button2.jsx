import './button2.css';

const Button2 = ({ onClick, children, as: Component = 'button2', ...rest }) => {
    return (
      <Component onClick={onClick} className="button2" {...rest}>
        {children}
      </Component>
    );
  };
  
  export default Button2;