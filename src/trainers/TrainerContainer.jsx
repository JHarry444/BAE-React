import trainersJSON from './trainers.json';
import Trainer from './Trainer';
import { useEffect, useState } from 'react';
import Search from './Search';

const TrainerContainer = () => {

    const [trainers, setTrainers] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
      console.log("Trainers rendered");
      setTrainers(trainersJSON);
      setSearch("" + Math.random());
    }, []); //dependencies list -> blank so effect will only be called once 'componentDidMount'

    const checkName = ( { name } ) => name.toLowerCase().startsWith(search.trim().toLowerCase()); 
    
    const filteredTrainers = trainers.filter(checkName);

    const renderedTrainers = filteredTrainers.map((trainer, i) => {
        return (
                <Trainer 
                  key={i}
                  name={trainer.name} 
                  age={trainer.age} 
                  jobTitle = {trainer.jobTitle}
                />
              );
      });
    
    const handleChange = e => setSearch(e.target.value);

    return (
      <>
        <Search search={search} handleChange={handleChange}/>
        <section>
          {renderedTrainers}
        </section>
      </>
    );
}

export default TrainerContainer;