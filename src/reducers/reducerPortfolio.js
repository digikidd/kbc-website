/**
 * Created by kellycarmichael on 9/13/16.
 */

export default function (state=[], action) {
    switch (action.type){
        case "CREATE_PORTFOLIO":
            if (action.payload.status == 200) {
                return {response: true};
            }
            else {
                return {response: false};
            }
            break;
        case "GETTING_PROJECTS":
            return {projects: action.payload.data};
        default:
            return state;
    }
}