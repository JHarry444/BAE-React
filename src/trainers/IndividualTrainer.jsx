import { useState } from "react";

const IndividualTrainer = () => {
    const [trainer, setTrainer] = useState({});


    return (
        <>
            <h1>
                {trainer.name}
            </h1>
            <p>
                {`Age: ${trainer.age}`}
                <br/>
                {`Job Title: ${trainer.jobTitle}`}
            </p>
        </>
    );
}

export default IndividualTrainer;