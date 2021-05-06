import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Trainer = ({ name, age, jobTitle }) => {

    // // componentDidMount/Update -> component has been rendered.
    // useEffect(() => {
    //     console.log(`Trainer ${name} rendered to page`);

    //     const tearDown = () => console.log(`Trainer ${name} removed page`);
    //     // componentWillUnmount -> component is about to be removed
    //     return tearDown;
    // });

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