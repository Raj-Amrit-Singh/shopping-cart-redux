import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './homeStyle.css';
import * as dataActions from '../actions/dataActions';

class DisplayContent extends React.Component{
    constructor(props){
        super(props);
        this.makeCards = this.makeCards.bind(this);
        this.state = {
            cards : []
        };
    }

    componentWillReceiveProps(props){
        if(props.vegetableList.length !== this.props.vegetableList){
            this.makeCards(props.vegetableList);
        }
    }

    makeCards(items){
        const {addToCart} = this.props; 
        this.setState({cards :items.map((element, index, array) =>{
            return (
                <div className="col-md-2" style={{ marginLeft: '60px'}}>
                <div className="card" key={element.id}>
                    <div className="card-body">
                        <img className="card-img-top" id="card-img-top"src={element.image} alt="myImage.png" />
                        <h4 className="card-title">{element.name}</h4>
                        <p className="card-text">{element.price}</p>
                        <button className="btn btn-primary" onClick={addToCart.bind(this,element)}>Add to Cart</button>
                    </div>
                </div>
                </div>
            );
        })});
    }

    render(){
        return (<div className="cards-display">
            {this.state && this.state.cards}
        </div>);
    }
}

DisplayContent.propTypes = {
    vegetableList: React.PropTypes.array.isRequired,
    addToCart: React.PropTypes.func.isRequired
};

export default connect()(DisplayContent);