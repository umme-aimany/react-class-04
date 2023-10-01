import logo from './logo.svg';
import './App.css';
import { Card } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { CardText } from 'reactstrap';
import { Button} from 'reactstrap';
// import './components/navitation';
import SimpleBottomNavigation from './components/navitation';
import FavoriteColor from './components/button';


function App() {
  return (
    <>
    
<Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
<SimpleBottomNavigation/>
<FavoriteColor/>
</>
  );
}

export default App;


