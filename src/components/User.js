/*
    Holds basic user information to prevent continuous API calls to auth0
*/
class User {
    constructor(){
        this.info = {
            email: '',
            name: {
                first: '',
                last: '',
            }
        }
    }
    setInfo(info){
        this.info = info;
    }
}
const user = new User();
export default user;