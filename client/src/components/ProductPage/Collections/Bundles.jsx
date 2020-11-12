import React from 'react';
import Item from './Item.jsx';
import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, getProduct, addProduct } from '../../../actions';
import { connect } from "react-redux";

const axios = require('axios')

class Bundles extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props)
    const productData = this.props.productData;
    // console.log(productData)
    return (
      <div>
        Buddles
        <span
          style={{
            display: "flex",
            justifyContent: "center"
          }}>
          {
            this.props.productData.slice(0, 4).map(item => (
              <Item item={item} key={item.id} />
            ))
          }

        </span>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state.getProduct)
  return {
    productData: state.getProduct,
  };
};

export default connect(mapStateToProps)(Bundles);

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


// const store = createStore(productReducer);
// store.dispatch(getProduct())
// var data = store.getState()
// var test = () => dispatch(getProduct());
// var test = dispatch()


{/* <span
          style={{
            display: "flex",
            justifyContent: "center"
          }}>

          {
            this.props.data.slice(0, 4).map(item => (
              <Item item={item} key={item.id} />
            ))
          }

        </span> */}


      // class Bundles extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       productData: [],
//     }
//   };
//   store.subscribe(() => {
//     this.setState({
//       productData: store.getStates().getProduct;
//     })
//   })

// // const productReducer = useSelector(state => state.productReducer)
// // const dispatch = useDispatch();
// render() {
//   return (
//     <div>
//       {/* <button onClick={() => dispatch(addProduct({ id: 'test' }))}>add a product</button> */}

//       {/* <button onClick={() => dispatch(getProduct())}>get all product</button> */}
//     </div >
//   )
// }
// }

// export default Bundles;

////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


// function Bundles() {

//   const productReducer = useSelector(state => state.productReducer)
//   const dispatch = useDispatch();
//   console.log(dispatch(getProduct()))
//   // how do I access state here??

//   return (

//     <div>
//       <button onClick={() => dispatch(addProduct({ id: 'test' }))}>add a product</button>

//       <button onClick={() => dispatch(getProduct())}>get all product</button>

//     </div >
//   )
// }
// export default Bundles;