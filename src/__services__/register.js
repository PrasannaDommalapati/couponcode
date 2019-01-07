import firebase from '../config/firebase.config'

const database = firebase.firestore();
const auth = firebase.auth();


export default class UserService {

    static signUp(data) {

        Promise.resolve()
            .then(() => database.collection('users').add(data))
            .catch(err => console.log(`Could not register: ${err}`))
    }

    static register(data) {

        auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(result => (data['uid'] = result.user.uid) && delete data.password)
            .then(() => database.collection('users').add(data))
            .catch(err => console.log(`Could not register: ${err}`));
    }
}
