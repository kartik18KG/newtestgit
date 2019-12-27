//by the OG way
const Greeting = () => <h1>Priya Bihani</h1>;
ReactDOM.render(<Greeting />, document.getElementById("rootPrime"));

//by inheriting react components
class App extends React.Component {
  //extends ingerits the features of React.Components
  state = {
    name: "Kartik",
    age: 18
  };
  //render is a function that neess to be there in every react component
  render() {
    return (
      <div className="app-content">
        <h1>Hey</h1>
        <span>Welcome to React: {this.state.name}</span>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
