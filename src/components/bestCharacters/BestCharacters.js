import Container from '../container';
import './BestCharacters.scss'; // Importa el archivo header.scss
import { Button,Header,Grid,Image } from "semantic-ui-react";
import MarvelImage from "../../img/marvel.png"

export default function BestCharacters(params) 
{
    return (
        <Container>
            <div className='best-characters'>

                <Grid columns={2} divided="vertically">
                    <Grid.Column>
                        <Header as="h1">
                            Los mejores personajes
                        </Header>

                        <Header as="h3">
                            Disfruta del mejor contenido
                        </Header>
                        <Button>Ver todos los personajes</Button>
                    </Grid.Column>

                    <Grid.Column className='image-container'>
                       <Image src ={MarvelImage} alt="marvel app"/>
                    </Grid.Column>

                </Grid> 
            </div>
        
        </Container>
    
    )
};
