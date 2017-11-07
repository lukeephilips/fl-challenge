import React from 'react';
import loader from '../assets/loader.svg';
import forbidden from '../assets/forbidden.svg';



class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      providers: [],
      providerType: ""
    }
  }
  componentWillMount(){
    fetch("https://raw.githubusercontent.com/Shipstr/react-coding-challenge/master/feed/sample.json").then(
      response => response.json(),
      error => console.log("An error occured.", error)
    ).then((json) => {
      let type = this.props.location.pathname.replace("/", "");
      let filteredProviders = json.providers.filter((provider) => { return provider.type === type && provider.yearStarted >= 2010});

      let sortedProvider = filteredProviders.sort(function (a,b) {
        var nameA = a.companyName.toUpperCase();
        var nameB = b.companyName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
        });
        let slicedProvider = sortedProvider.slice(0,21);
      this.setState({
        providers: filteredProviders,
        providerType: type
      });
    });
  }
  typeToTitle() {
    let type = this.state.providerType;
    switch(type) {
      case "air":
          return "Air Providers"
          break;
      case "ocean":
          return "Ocean Providers"
          break;
      case "customBroker":
          return "Custom Brokers"
          break;
      default:
        return null;
    }
  }
  providersList = [];

render(){
  if(this.state.providers.length > 0) {
    this.providersList = this.state.providers.map(function (provider, i){
      return (
        <div className="col-md-3 col-sm-6 no-pad" key={i}>
          <ul>
            <div className = "provider-panel panel panel-default">
              <div className= "panel-body">
                <img className="company-logo" alt={provider.companyName} src={provider["images"]["Company Logo"]["url"]} />
                <p>{provider.companyName}</p>
              </div>
            </div>
          </ul>
        </div>
      )
    });
  } else if (this.state.providerType === null) {
    <div>
      <img src={forbidden} alt="forbidden..."/>
      <p>Oops, something went wrong...</p>
    </div>
  } else {
    return (
      <div>
        <img src={loader} alt="loading..."/>
      </div>
    )
  }
    return (
      <div>
        <h1>{this.providersList.length} {this.typeToTitle()}</h1>
        {this.providersList}
      </div>
    )
  }
}

export default Provider;
