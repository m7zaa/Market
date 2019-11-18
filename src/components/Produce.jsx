import React from "react";
import PropTypes from "prop-types";

class Produce extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.quantity,
      backgroundColor: "black"
      
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({count: this.state.count-1});
    if(this.state.count <= 121){
      this.setState({
        borderColor: "red",
        borderWidth: "10px"
      });
    }
  }
    

  render() {
    var imageStyle = {
      width: "150px",
      maxHeight: "150px",
      backgroundColor: "blanchedalmond",
    };
    var galleryStyle = {
      // flexDirection: "ltr ",
      // margin: "20",
      // display: "inline-flex",
      margin: "0 auto 0 auto",
      backgroundColor: "blanchedalmond"
    };
    var productStyle = {
      width: "300px",
      height: "300px",
      textAlign: "center",
      // order: "0",
      padding: "15",
      // alignSelf: "center",
      
      
    };
    var contentStyle = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
        
      margin: "1% 1%",
      // display: "flex",
    };
    const cChange = {
      colorChange: {
        borderColor: this.state.borderColor,
        borderWidth: this.state.borderWidth

      }
    };  
    const { colorChange } = cChange;  
    return (
      
      <div style={contentStyle}>
        <div style={Object.assign({}, galleryStyle, colorChange)} className="card">
          <div style={productStyle} className="flex-item">
            <h3>{this.props.name}</h3>
            <p>{this.props.price}</p>
            <p>Quantity: {this.state.count}   <button onClick = {this.handleClick}>Sell</button></p>
            <img style={imageStyle}src={this.props.photo}/>
          </div> 
        </div>
      </div>
    );
  }
}

Produce.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  photo: PropTypes.string,
  quantity: PropTypes.string,
};

export default Produce;