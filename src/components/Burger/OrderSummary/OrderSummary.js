import React,{Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    //This could be a functional component. Doesen't have to be a class
    componentWillUpdate(){
        //console.log('[OrderSummary] WillUpdate')
    }

    render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey =>{
            return(
                <li key = {igKey}>
                    <span style = {{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                </li>
            )
        })

        return(
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price : {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType = 'Danger' 
                clicked = {this.props.purchaseCancelled} >CANCEL</Button>
                <Button btnType = 'Success' 
                clicked = {this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;