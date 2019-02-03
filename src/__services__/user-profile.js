import firebase from '../config/firebase.config';
const auth = firebase.auth();
const database = firebase.firestore();

export default class UserProfile {

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
            .then(() => this.updateProfile(displayName))
            .then(() => this.emailVerified(user))
            .then(() => this.createProfile(data))
            .catch(err => console.log(`Could not register: ${err}`));
    }

    static createProfile(profile) {
        return Promise.resolve()
            .then(() =>database.collection('profiles').add(profile))
            .then(documentRef => console.log(`Profile has been created successfully ${documentRef.id}`))
            .catch(err => console.log(`Could not create a profile in the data base ${err}`))
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

    static updateProfile(dName) {

        auth.currentUser.updateProfile({
                displayName:dName,
                photoURL:'https://www.pastepic.xyz/image/0cwI1'
            })
            .then(() => console.log(`Update profile has been successful: ${ auth.currentUser.displayName}`))
            .catch(err => console.log(`Couldn't update the ${ auth.currentUser} profile :${err}`));
    }

    static login(data) {

        return Promise.resolve()
            .then(() =>auth.signInWithEmailAndPassword(data.email, data.password))
            .then(credential => this.retrieveUserFromToken(credential))
            // .then(userCredential => sessionstorage.setItem({userCredential}))
            .catch(error => console.log(`Could not store in session storage${error}`));
    }

    static retrieveUserFromToken(credential) {
        const token = credential.user.ra.split('.')[1];
        const payload = JSON.parse(Buffer.from(token, 'base64')
            .toString('ascii'));

        console.log(payload);

        //received token
        //split and get a payload
        //decode play load from base64
        //parse in to json

        //store the user in local storage

    }
    static logout() {
        return auth.signOut()
            .then(() => console.log('user logged out!!!'))
            .catch(err => console.log(`Could not logout user ${err}`));
    }

    static authStateChanged() {

        auth.onAuthStateChanged(user =>{
            if(user) {
                console.log("logged in")
            } else {
                console.log('not logged in');
            }
        })
    }
}
