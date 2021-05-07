import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const IndividualTrainer = () => {
  const [trainer, setTrainer] = useState({});

  // will pull the id from the path
  const params = useParams();
  const { id } = params;

  // componenentDidMount -> runs after the component renders (only once)
  useEffect(() => {
    axios.get(`http://localhost:8080/trainer/get/${id}`)
      .then((res) => setTrainer(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <h1>
        {trainer.name}
      </h1>
      <p>
        {`Age: ${trainer.age}`}
        <br />
        {`Job Title: ${trainer.jobTitle}`}
      </p>
    </>
  );
};

export default IndividualTrainer;
