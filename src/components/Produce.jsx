import React from "react";
import PropTypes from "prop-types";

class Produce extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.quantity,
      backgroundColor: "black",
      editing: false
      
    };
    this.handleClick = this.handleClick.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }
  edit(){
    this.setState({editing: true});

  }
  save(){
    var val1 = this.refs.newText1.value;
    var val2 = this.refs.newText2.value;
    var val3 = this.refs.newText3.value;
    
    this.props.updatedName(val1, val2, val3, this.props.index);
    this.setState({editing:false});
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
    
  renderNormal(){
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
            <button onClick={this.edit}>Edit!</button>
          </div> 
        </div>
      </div>
    );
  }
  renderForm() {
    return (
      <div>
        <textarea ref="newText1" defaultValue={this.props.name}></textarea>
        <textarea ref="newText2" defaultValue={this.props.price}></textarea>

        <textarea ref="newText3" defaultValue={this.props.quantity}></textarea>


        <button onClick={this.save}>Save</button>
      </div>
    );
  }
    
  render() {
    
    if(this.state.editing){
      console.log(this.state.editing + "got here");
      return this.renderForm();
    } else{
      return this.renderNormal();
    }
  
  }
}

Produce.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  photo: PropTypes.string,
  quantity: PropTypes.string,
  index: PropTypes.number,

};

export default Produce;