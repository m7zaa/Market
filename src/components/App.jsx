import React from "react";
import MarketList from "./MarketList";
import { Switch, Route } from "react-router-dom";
import ProduceList from "./ProduceList";
import Home from "./Home";
import NavBar from "./NavBar";
import Error404 from "./Error404";
import apple from "../Assets/Img/apple.png";
import kale from "../Assets/Img/kale.png";
import greenBeans from "../Assets/Img/gb.png";
import potatoes from "../Assets/Img/pots.png";
import squash from "../Assets/Img/squash.png";
import ackee from "../Assets/Img/ackee.png";
import buddha from "../Assets/Img/buddha.png";
import cherimoya from "../Assets/Img/cherimoya.png";
import dragon from "../Assets/Img/dragon.png";
import durian from "../Assets/Img/durian.png";
import fiddle from "../Assets/Img/fiddlehead.png";
import galangal from "../Assets/Img/galangal.png";
import hala from "../Assets/Img/hala.png";
import langsat from "../Assets/Img/langsat.png";
import mangosteen from "../Assets/Img/mangosteen.png";
import rambutan from "../Assets/Img/Rambs.png";
import salak from "../Assets/Img/salak.png";
import tamarind from "../Assets/Img/tamarind.png";
import pot2 from "../Assets/Img/pots.jpg";
import stinky from "../Assets/Img/stinky.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MasterProduceList: [
        {
          name: "Galangal",
          price: "$1.99/lb",
          photo: galangal,
          quantity: "128"
      
        },
        {
          name: "SweetBee Apples",
          price: "$0.60/lb",
          photo: apple,
          quantity: "128"
        },
        {
          name: "Tamarind",
          price: "$5.50/lb",
          photo: tamarind,
          quantity: "128"
        },
        {
          name: "Smelly Beans",
          price: "$10.99/lb",
          photo: stinky,
          quantity: "128"
        },
        {
          name: "Kale",
          price: "$3.99/bunch",
          photo: kale,
          quantity: "128"
        },
        {
          name: "Fiddleheads",
          price: "$4.49/lb",
          photo: fiddle,
          quantity: "128"
        },
        {
          name: "Durian",
          price: "$0.99/lb",
          photo: durian,
          quantity: "128"
        },
        {
          name: "Green Beans",
          price: "$1.99/lb",
          photo: greenBeans,
          quantity: "128"
      
        },
        {
          name: "Potatoes",
          price: "$0.99/lb",
          photo: potatoes,
          quantity: "128"
        },
        {
          name: "Acorn Squash",
          price: "$1.99/lb",
          photo: squash,
          quantity: "128"
        },
        {
          name: "Fruit of Hala",
          price: "$10.99/lb",
          photo: hala,
          quantity: "128"
        },
        {
          name: "Ackee",
          price: "$10.99/lb",
          photo: ackee,
          quantity: "128"
        },
        {
          name: "Buddha's Hand",
          price: "$15.99/lb",
          photo: buddha,
          quantity: "128"
        },
        {
          name: "Rambutan",
          price: "$7.99/each",
          photo: rambutan,
          quantity: "128"
        },
        {
          name: "Cherimoya",
          price: "$3.99/lb",
          photo: cherimoya,
          quantity: "128"
        },
        {
          name: "Langsat",
          price: "$2.99/lb",
          photo: langsat,
          quantity: "128"
        },
        {
          name: "Dragonfruit",
          price: "$3.99/lb",
          photo: dragon,
          quantity: "128"
        },
        {
          name: "?",
          price: "$3,000/each",
          photo: pot2,
          quantity: "128"
        },
        {
          name: "Salak",
          price: "$22.99/lb",
          photo: salak,
          quantity: "128"
        },
        {
          name: "Mangosteen",
          price: "$203.99/lb",
          photo: mangosteen,
          quantity: "128"
        }
      ]
    };
    this.handleAddingMasterProduceList = this.handleAddingMasterProduceList.bind(this);
  }
  handleAddingMasterProduceList(newText1, newText2, newText3, i) {
    console.log(this.state.MasterProduceList.name);
    var arr = this.state.MasterProduceList;
    arr[i].name = newText1;
    arr[i].price = newText2;
    arr[i].quantity = newText3;

    this.setState({MasterProduceList: arr });

  }
  render(){
    var siteStyle = {
      backgroundColor : "burlywood",
    };
    return (
      <div style={siteStyle} className="container">
  
  
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/Market" component={MarketList} />
          <Route path ='/Produce' render={()=><ProduceList masterProduceList={this.state.MasterProduceList}  updatedName={this.handleAddingMasterProduceList}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;