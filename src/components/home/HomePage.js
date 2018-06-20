import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dataActions from '../actions/dataActions';
import DisplayContent from './DisplayContent';
import Header from './header/Header';

class HomePage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state ={
            items: {},
            vegetableList:[]
        };
        this.initialize = this.initialize.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.getSum = this.getSum.bind(this);
    }

    componentDidMount() {
        if(!(this.props && this.props.items && this.props.items.length)){
            this.props.dispatch(dataActions.getItemsList());
        }
    }

    componentWillReceiveProps(nextprops) {
        if(nextprops.items.length <= 1){
            this.initialize(nextprops.items);
        }
    }

    initialize() {
        let vegetableList = this.props.items[0];
        if(!this.state.vegetableList.length && !!this.props.items.length) {
            let myVegetableList = [];
            for(let i=0;i<=29; i++) {
            myVegetableList.push(vegetableList[i]);
            }
            this.setState({vegetableList:myVegetableList});
        }
    }

    addToCart(item) {
        this.props.dispatch(dataActions.onItemSelect(item));
    }

    getSum(items) {
        return items.reduce((sum, element) => {
            return sum + element.price;
        }, 0);
    }
    
    render() {
        this.initialize();
        return(
            <div>
            <Header cartItems={this.props.cartItems} getSum={this.getSum}/>
            <DisplayContent vegetableList={this.state.vegetableList} addToCart={this.addToCart}/>
            </div>
        );
    }
}

/*function mapDispatchToProps(dispatch) {
    return {
       actions: bindActionCreators(dataActions, dispatch) 
    };
}*/

function mapStateToProps(state, ownProps) {
    return {
        items: state.dataReducer,
        cartItems: state.selectedItems
    };
}

HomePage.propTypes = {
    actions: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(HomePage);