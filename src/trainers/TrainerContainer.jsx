import trainersJSON from './trainers.json';
import Trainer from './Trainer';
import { useState } from 'react';

const TrainerContainer = () => {

    const [search, setSearch] = useState("");

    const checkName = ( { name } ) => name.toLowerCase().startsWith(search.trim().toLowerCase()); 
    
    const filteredTrainers = trainersJSON.filter(checkName);

    const trainers = filteredTrainers.map((trainer, i) => {
        return (
                <Trainer 
                  key={i}
                  name={trainer.name} 
                  age={trainer.age} 
                  jobTitle = {trainer.jobTitle}
                />
              );
      });
    
    return (
      <>
        <label>Search: </label> 
        <input placeholder="enter search here" value={search} onInput={e => setSearch(e.target.value)}/>
        {trainers}
      </>
    );
}

export default TrainerContainer;