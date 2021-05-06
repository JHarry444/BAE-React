import Trainer from './Trainer';
import { useEffect, useState } from 'react';
import Search from './Search';
import axios from 'axios';

const TrainerContainerJas = () => {

  const trainers = [
    {
        "name": "Jordan Harrison",
        "age": 27,
        "jobTitle": "Trainer"
    },
    {
        "name": "Joshua",
        "age": 27,
        "jobTitle": "Trainer"
    },
    {
        "name": "Joseph",
        "age": 27,
        "jobTitle": "Trainer"
    },
    {
        "name": "Jonathan",
        "age": 27,
        "jobTitle": "Trainer"
    },
    {
        "name": "Jimmy",
        "age": 27,
        "jobTitle": "Trainer"
    },
    {
        "name": "Piers Barber",
        "age": 16,
        "jobTitle": "weapon"
    },
    {
        "name": "Vinesh Ghela",
        "age": 33,
        "jobTitle": "trainer"
    }
];

    const [search, setSearch] = useState("");
    const checkName = ( { name } ) => name.toLowerCase().startsWith(search.trim().toLowerCase()); 
    
    const handleChange = e => setSearch(e.target.value);

    const trainersAsJSX = trainers.map(trainer => {
      return <Trainer name={trainer.name} age={trainer.age} jobTitle={trainer.jobTitle}/> 
    });

    return (
      <>
        <Search search={search} handleChange={handleChange}/>
        <section>
            {trainersAsJSX}
        </section>
      </>
    );
}

export default TrainerContainerJas;