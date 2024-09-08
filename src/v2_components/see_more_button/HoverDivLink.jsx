import { Link } from 'react-router-dom';
import Button from './Button2';

const HoverDivLink = ({ to }) => {
  return (
    <Button as={Link} to={to}></Button>
  );
};

export default HoverDivLink;
