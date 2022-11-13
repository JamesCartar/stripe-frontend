const MainContextReducer = (state, action) => {
    switch (action.type) {
        case "START_FETCHING":
            return {
                isFetching: true,
                products: [],
                cardProducts: JSON.parse(localStorage.getItem('products')) || [],
                message: '',
                isShown: false,
                error: '',
            };
        case "FETCHING_ELECTRONIC_SUCCESSFUL":
            return {
                isFetching: false,
                products: action.payload,
                cardProducts: state.cardProducts,
                message: state.message,
                isShown: state.isShown,
                error: '',
            };
        case "FETCHING_JEWELERY_SUCCESSFUL":
            return {
                isFetching: false,
                products: action.payload,
                cardProducts: state.cardProducts,
                message: state.message,
                isShown: state.isShown,
                error: '',
            };
        case "FETCHING_MEN_CLOTHING_SUCCESSFUL":
            return {
                isFetching: false,
                products: action.payload,
                cardProducts: state.cardProducts,
                message: state.message,
                isShown: state.isShown,
                error: '',
            };
        case "FETCHING_WOMEN_CLOTHING_SUCCESSFUL":
            return {
                isFetching: false,
                products: action.payload,
                cardProducts: state.cardProducts,
                message: state.message,
                isShown: state.isShown,
                error: '',
            };
        case "FETCHING_FAILURE":
            return {
                isFetching: false,
                products: [],
                cardProducts: [],
                message: '',
                isShown: false,
                error: action.payload,
            };
        case "ADD_TO_CARD":
            const dataInStorage = JSON.parse(localStorage.getItem('products'));
            const isInclude = dataInStorage?.some(productInStorage => productInStorage.id === action.payload.product.id);
            if(!isInclude) {
                if(dataInStorage !== null) {
                    localStorage.setItem('products', JSON.stringify([...dataInStorage, action.payload.product]));
                } else {
                    localStorage.setItem('products', JSON.stringify([action.payload.product]));
                }
            } 
            return {
                isFetching: false,
                products: state.products,
                cardProducts: [action.payload.product, ...state.cardProducts],
                message: action.payload.message,
                isShown: true,
                error: '',
            };
        case "REMOVE_FROM_CARD":
            return {
                isFetching: false,
                products: state.products,
                cardProducts: state.cardProducts.filter((product) => product.id !== action.payload.productId),
                message: action.payload.message,
                isShown: true,
                error: '',
            };
        case "CLEAR_CARD":
            localStorage.clear();
            return {
                isFetching: false,
                products: state.products,
                cardProducts: [],
                message: action.payload.message,
                isShown: true,
                error: '',
            };
        case "HIDE_MESSAGE":
            return {
                isFetching: false,
                products: state.products,
                cardProducts: state.cardProducts,
                message: '',
                isShown: false,
                error: '',
            }
        case "SHOW_ERROR":
            return {
                isFetching: false,
                products: state.products,
                cardProducts: state.cardProducts,
                message: state.message,
                isShown: true,
                error: action.payload,
            }

        default:
            return state;
    }
}

export default MainContextReducer;