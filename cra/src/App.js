
import { useState } from 'react';
import { Paragraphe } from './Paragraphe';
import { ParagrapheClass } from './ParagrapheClass';
import { Button } from './buttons';
import './styles/main.scss';



function App(props) {
  const [count, setCount] = useState(0);

  const OnClickHandler = () => {
    //alert('OnClickHandler');
    setCount(count+1)
  }

  return (
    <div className="container">
      <header className="App-header">
        <h1>{props.text}</h1>
        <Paragraphe {...props} />
        <br/>
        <br/>
        <ParagrapheClass {...props} />
        <Button outline={false} OnClickHandler={OnClickHandler}>
          {props.text}
        </Button>
        {count}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
