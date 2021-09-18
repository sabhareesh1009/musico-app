export const intialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBSeR51nhN5pXICpB_L7rBpXR25PyiAJqWHWyQ1U7qBiuMjpMH3B_RDAn9Mcul3NdkKWtZeo7DZdracjrQjWk92jfrUPgWw94_37KEOztSg9RoZBMUf149UtOnYDGTuPDPv0sIMpJYK5Im93gMokpfJECkENyhz8JdrbNMbc1sWR3J1",
};

export const reducer = (state, action) => {
console.log(action);

// Action => type, [payload]

    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default: 
            return state;
    }
}

export default reducer;