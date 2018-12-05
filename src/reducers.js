import { combineReducers } from 'redux';

const initialRooms=  [ {name: 'Floor1'}, {name: 'Floor2'}, {name: 'Garden'} ];
const initialProducts= [
  {name: "Lemonade", pictureSrc: "lemonade_picture.jpg", description: "Sugar, water, lemon, ice", price: "200 RSD"},
  {name: "Juice", pictureSrc: "orange_juice.jpg", description: "100% orange juice", price: "250 RSD"},
  {name: "Ice cream", pictureSrc: "Ice-cream.jpg", description: "blablabla", price: "150 RSD"}
];

const allRooms= (state= initialRooms, action) => {
  switch (action.type) {
    case 'ADD_ROOM':
      return [
        ...state,
        {name: action.name}
    ];
    default:
      return state
  }
}

const allProducts= (state= initialProducts, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.newProduct];
    case 'DELETE_PRODUCT':
      return [...state.slice(0,action.index),
      ...state.slice(action.index + 1)];
    case 'EDIT_PRODUCT':
      return [...state.slice(0,action.index),
         action.newVersion, ...state.slice(action.index + 1)]
    default:
      return state
  }
}

const deletingProduct= (state= {index: null, name: ''}, action)=> {
  switch (action.type) {
    case 'SET_DELETING_PRODUCT':
      return {index: action.index, name: action.name}
    default:
      return state
  }
}

const addingProduct= (state= {}, action) => {
  switch (action.type) {
    case 'NAME_CHANGE_ADD_PRODUCT':
      return {...state, name: action.name}
    case 'PRICE_CHANGE_ADD_PRODUCT':
      return {...state, price: action.price}
    case 'DESCRIPTION_CHANGE_ADD_PRODUCT':
      return {...state, description: action.description}
    case 'PICTURE_CHANGE_ADD_PRODUCT':
      return {...state, pictureSrc: action.URL}
    case 'RESET_STATE_ADD_PRODUCT':
     return {}
    default:
      return state
  }
}
const editingProductIndex= (state= null, action) => {
  switch(action.type) {
    case 'SET_EDITING_PRODUCT':
      return action.index
    case 'RESET_EDITING_PRODUCT':
      return null
    default:
      return state
  }
}

const editingProduct= (state= {}, action) => {
  switch (action.type) {
    case 'SET_EDITING_PRODUCT':
      return action.product
      case 'NAME_CHANGE_EDIT_PRODUCT':
        return {...state, name: action.name}
      case 'PRICE_CHANGE_EDIT_PRODUCT':
        return {...state, price: action.price}
      case 'DESCRIPTION_CHANGE_EDIT_PRODUCT':
        return {...state, description: action.description}
      case 'PICTURE_CHANGE_EDIT_PRODUCT':
        return {...state, pictureSrc: action.URL}
      case 'RESET_EDITING_PRODUCT':
        return {}
    default:
      return state
  }
}



const reducers= combineReducers({ allRooms, allProducts, deletingProduct, addingProduct, editingProduct, editingProductIndex })
export default reducers
