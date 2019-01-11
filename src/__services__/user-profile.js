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

        let user;
        let displayName= [data.firstName, data.lastName].join('.');

        auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(result =>{
                user = result.user;
                data['photoURL'] = user.photoURL
                data['uid'] = user.uid;
                delete data.password;
                delete data.confirmPassword;
            })
            .then((() => this.updateProfile(displayName)))
            .then(() => this.emailVerified(user))
            .then(() => database.collection('profiles').add(data))
            .catch(err => console.log(`Could not register: ${err}`));
    }

    /**
     * @param user
     * send verification email to the un-verified users
     */
    static emailVerified(user) {

        if(user.emailVerified){return;}
           return Promise.resolve()
               .then(() => user.sendEmailVerification())
               .then(() => console.log(`Email verification sent to ${user.email}`));

    }
    static changePassword() {

        let user = auth.currentUser;

        if(user.uid != null) {
            console.log(`user signed in with an id: ${user.uid}`);
        } else {
            console.log(`user not signed in`);
        }
    }
    static forgotPassword() {

    }

    static updateProfile(dName) {

        return Promise.resolve()
            .then(()=>  auth.currentUser.updateProfile({displayName:dName,photoURL:'https://www.pastepic.xyz/image/0cwI1'}))
            .then(() => console.log(`Update profile has been successful: ${ auth.currentUser.displayName}`))
            .catch(err => console.log(`Couldn't update the ${ auth.currentUser} profile :${err}`));
    }

    static login(data) {

        let email = data.email;
        let password = data.password;
        return Promise.resolve()
            .then(() =>auth.signInWithEmailAndPassword(email, password))
            .then(res => console.log(res));
    }
}
