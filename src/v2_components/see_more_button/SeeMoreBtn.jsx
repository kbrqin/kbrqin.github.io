import { Link } from 'react-router-dom'
import Button from './Button'

const SeeMoreBtn= () => {

  return (
    <Button as={Link} to="/works">See More</Button>
  )
}

export default SeeMoreBtn;