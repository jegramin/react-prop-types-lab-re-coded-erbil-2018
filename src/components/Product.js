import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return(
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.producer}</p>
          <p>{this.props.hasWatermark}</p>
          <p>{this.props.color}</p>
          <p>{this.props.weight}</p>
        </div>
      )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.string.oneOf([
      'white', 'eggshell-white' , 'salmon'
    ]).isRequired,
  weight: (weight)=>{
    if(weight>80 && weight<300){
      return PropTypes.number.isRequired
    }
  }
};
