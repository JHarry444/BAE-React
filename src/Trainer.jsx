// import PropTypes from 'prop-types';

const Trainer = (props) => {
    console.log("PROPS: ", props);
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>JobTitle: {props.jobTitle}</p>
        </div>
    );
}

export default Trainer;

Trainer.defaultProps = {
    name: "Harry",
    age: 22,
    jobTitle: "DevOps wizard"
}

// Trainer.propTypes = {
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//     jobTitle: PropTypes.string.isRequired
// }