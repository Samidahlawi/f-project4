//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
import apiUrl from '../apiConfig';
import axios from "axios";
export const index = (user) => {
    return axios({
        method: "GET",
        url: apiUrl + "/events"
        // headers:{
        //     "Authorization":`Bearer ${user.token}`
        // }
    })
}
export const show = (eventId) => {
    return axios({
        method: "GET",
        url: apiUrl + `/events/${eventId}`
        // headers:{
        //     "Authorization":`Bearer ${user.token}`
        // }
    })
}
//not sure
export const create = (user , newEvent ) => {
    return axios({
        method: "POST",
        url: apiUrl + "/events",
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data: {
            event: newEvent
        }
    })
}
export const update = (user , updatedEvent ,eventId ) => {
    return axios({
        method: "PATCH",
        url: apiUrl + `/events/${eventId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data: {
            event: updatedEvent
        }
    })
}
export const destroy = (user , eventId) => {
    return axios({
        method: "DELETE",
        url: apiUrl + `/events/${eventId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}