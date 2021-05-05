import trainersJSON from './trainers.json';
import Trainer from './Trainer';
import { useState } from 'react';
import Search from './Search';

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
    
    const handleChange = e => setSearch(e.target.value);

    return (
      <>
        <Search search={search} handleChange={handleChange}/>
        <section>
          {trainers}
        </section>
      </>
    );
}

export default TrainerContainer;