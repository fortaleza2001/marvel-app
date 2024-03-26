import { Card, Header } from "semantic-ui-react";
import Container from "../container/Container";
import useFetch from "../hooks/useFetch";
import './ListLastEvents.scss'
import LastEvents from "../lastEvents/LastEvents";

export default function ListLastEvents(params) 
{
    const lastEventsfetch = useFetch(`${process.env.REACT_APP_API_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=5`)
    console.log(lastEventsfetch)
    console.log(process.env.REACT_APP_API_URL_BASE)

    return (
    <div className="container-list-last-events">
        <Header size="large">Ultimos Eventos</Header>  

        <Container bg="ligth">
            <Card.Group itemsPerRow={5}>
                <LastEvents lastEventsfetch={lastEventsfetch}/>

            </Card.Group>



        </Container>  


    </div>
        
    )
};
