import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Trainer = ({ name, age, jobTitle }) => (
  <Card>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        Age:
        {' '}
        {age}
        <br />
        JobTitle:
        {' '}
        {jobTitle}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Trainer;

Trainer.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  jobTitle: PropTypes.string.isRequired,
};
