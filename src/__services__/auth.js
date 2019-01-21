// export const auth = functions.https.onRequest((request, response) => {
//
//     const firebaseToken = request.get('authorization');
//
//     Promise.resolve()
//         .then(() => extractUser(firebaseToken))
//         .then(user => getToken(user.email, {key: user.key}))
//         .then(authToken => response.set('Authorization', authToken).sendStatus(200))
//         .catch(() => response.sendStatus(403));
//
// });
//
// function getToken(email, claims){
//     return admin.auth().createCustomToken(email, claims)
// }
//
// function extractUser(firebaseToken) {
//
//     const token = firebaseToken.split('.')[1];
//     const payload = JSON.parse(Buffer.from(token, 'base64').toString('ascii'));
//
//     const user = {
//         email:   payload.uid,
//         key:     payload.claims.key,
//         timeout: payload.exp
//     };
//
//     return Date.now() >= payload.exp ? Promise.resolve(user) : Promise.reject(payload.uid);
//
// }

function abc() {
    console.log('i am in abc function')
}

module.exports = {
abc
}
