
import { useState } from "react";
import { Grid,Header } from "semantic-ui-react";
import Container from "../components/container";
import useFetch from "../components/hooks/useFetch";
import ListComics from "../components/listComics";

export default function Comics() {
  
  const [rendercomics,setRendercomics] = useState(10)
  const listComics = useFetch(`${process.env.REACT_APP_API_URL_BASE}/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=focDate&limit=${rendercomics}`)
  console.log(listComics)

  

  return (
   

    <div className="comics-page" >
      <div id="slide-comics-image"/>
      <Grid>
        <Grid.Column>
          <Container bg="ligth">
            <Header as ="h2">
              Los Mejores Comics
            </Header>

            <ListComics
              listComics={listComics}
              renderComics={rendercomics}
              setRenderComics={setRendercomics}
            />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
}
