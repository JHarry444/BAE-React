// import trainersJSON from './trainers.json';
import Trainer from './Trainer';
import { useEffect, useState } from 'react';
import Search from './Search';
import axios from 'axios';
import { CardColumns, CardDeck, CardGroup, Col, Container, Row } from 'react-bootstrap';

const TrainerContainer = () => {

    const [trainers, setTrainers] = useState([
      {
        name: 'jon p',
        age: 31,
        occupation: 'trainee'
      }
    ]);

    const [search, setSearch] = useState("");

    useEffect(() => {
      console.log("Trainers rendered");
      axios.get("http://localhost:8080/trainer/getAll")
        .then(res => {
          // handle my response
          const trainersJSON = res.data;
          console.log('Response Data: ', trainersJSON);
          setTrainers(trainersJSON);
        })
        .catch(err => console.log(err));
    }, []); //dependencies list -> blank so effect will only be called once 'componentDidMount'

    const checkName = ( { name } ) => name.toLowerCase().startsWith(search.trim().toLowerCase()); 
    
    const filteredTrainers = trainers.filter(checkName);

    const renderedTrainers = filteredTrainers.map((trainer) => {
        return (
            <Col className="">
                <Trainer key={trainer.id} name={trainer.name} age={trainer.age} jobTitle = {trainer.jobTitle}/>
            </Col>
          );
      });
    
    const handleChange = e => setSearch(e.target.value);

    return (
      <Container>
        <Row className="w-25 m-auto mb-1">
         <Search search={search} handleChange={handleChange}/>
        </Row>
        <CardGroup className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {renderedTrainers}
        </CardGroup>
      </Container>
    );
}

export default TrainerContainer;