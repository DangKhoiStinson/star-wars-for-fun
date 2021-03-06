import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            person: []
        });
    }
    componentDidMount() {
        fetch("https://swapi.dev/api/people/?page=2")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        person: data.results
                    });
                }
            )
    }
    render() {
        const list = this.state.person.map((i) => (
            <div id={i.name} key={i.name+1}>
            <p><strong>{i.name}</strong>, who has {i.hair_color==="n/a" ? "no": i.hair_color} hair, is {i.height} centimeters tall. </p>
          </div>
        ));
        const brown = this.state.person.filter(i => i.hair_color === "brown");
        const brown_people = brown.map(i =>
            <div id={i.name} key={i.name+1}>
            <p><strong>{i.name}</strong></p>
          </div>
        );
        return (
            <div className="container">
              {list}
              <br />
              <div> Those who has brown hair are : <br />
              {brown_people}
              </div>
            </div>
        );
    }
}


export default App;