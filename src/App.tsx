import * as React from 'react';
import {roll} from './barrels';

class App extends React.Component {
  public render() {
    const message = roll({revs: 10});
    return (
      <div>
        {message}
      </div>
    );
  }
}

export default App;

