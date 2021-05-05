import PropTypes from 'prop-types';

const Trainer = ({ name, age, jobTitle }) => {

    return (
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>JobTitle: {jobTitle}</p>
        </div>
    );
}

export default Trainer;

Trainer.defaultProps = {
    name: "Harry",
    age: 22,
    jobTitle: "DevOps wizard"
}

Trainer.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    jobTitle: PropTypes.string.isRequired
}