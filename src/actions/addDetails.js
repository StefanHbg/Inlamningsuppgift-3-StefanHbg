//denna actions körs ifrån en komponent när vi vill uppdatera vår store
//Vi skickar med det vi vill uppdatera som en parameter i detta fall myDetails.

/**
 * Type - säger vad vår reducer ska göra
 * payload - den data vi vill lägga till i vårt redux store
 */
const addDetails = (myDetails) => {
    return {
        type: 'ADD_DETAILS',
        payload: myDetails
    }
}

export default addDetails;