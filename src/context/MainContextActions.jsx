export const startFetching = () => ({
    type: 'START_FETCHING',
});

export const fetchingElectronicSuccessful = (products) => ({
    type: 'FETCHING_ELECTRONIC_SUCCESSFUL',
    payload: products,
});

export const fetchingJewelerySuccessful = (products) => ({
    type: 'FETCHING_JEWELERY_SUCCESSFUL',
    payload: products,
});

export const fetchingMenClothingSuccessful = (products) => ({
    type: 'FETCHING_MEN_CLOTHING_SUCCESSFUL',
    payload: products,
});

export const fetchingWomenClothingSuccessful = (products) => ({
    type: 'FETCHING_WOMEN_CLOTHING_SUCCESSFUL',
    payload: products,
});

export const addToCard = ({ product, message}) => ({
    type: 'ADD_TO_CARD',
    payload: { product, message },
});

export const removeFromCard = ({ productId, message }) => ({
    type: 'REMOVE_FROM_CARD',
    payload: { productId, message},
});

export const clearCard = (message) => ({
    type: 'CLEAR_CARD',
    payload: message,
});

export const showError = (error) => ({
    type: 'SHOW_ERROR',
    payload: error,
})

export const hideMessage = () => ({
    type: 'HIDE_MESSAGE',
});

