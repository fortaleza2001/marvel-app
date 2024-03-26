
import { Button, Card, Dimmer, Icon, Image, Loader } from "semantic-ui-react"
import './LastEvents.scss'

export default function LastEvent({ lastEventsfetch }) {
    const { loading, result } = lastEventsfetch

    if (loading || !result) {
        return (
            <div>
                <Dimmer active inverted>
                    <Loader inverted>Loading...</Loader>
                </Dimmer>
            </div>
        )
    }

    const { results } = result.data
    return (
        results.map((event, index) => (
            <Card key={index} className="last-event">
                <Image src={`${event.thumbnail.path}.${event.thumbnail.extension}`} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        {event.title}
                    </Card.Header>

                    <Card.Meta>
                        <span>
                            <Icon name="book"/>
                            {event.comics.available} Comics
                        </span>
                    </Card.Meta>

                    <Card.Description>
                        {event.description}
                    </Card.Description>
                </Card.Content>

                <Card.Content extra>
                    <Button animated fluid as="a" href={event.urls[0].url} target="_blanck" color="black">
                        <Button.Content visible>
                            Ver Evento
                        </Button.Content>

                        <Button.Content hidden>
                            <Icon name="arrow right"/>
                        </Button.Content>
                    </Button>
                </Card.Content>
            </Card>
        ))
    )
}
