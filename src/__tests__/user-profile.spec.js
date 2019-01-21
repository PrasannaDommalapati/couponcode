import Enzyme from '../setupTests';
import * as firebase from '../config/firebase.config';
import FirebaseMock from 'firebase-mock';

const mockDatabase = new FirebaseMock.MockFirebase();
const mockAuth = new FirebaseMock.MockFirebase();
const mockSdk = new FirebaseMock.MockFirebaseSdk(path => path ? mockDatabase.child(path) : mockDatabase, () => mockAuth);

describe('user profile', () => {

    let firebaseMock;
    let databaseMock;

    beforeAll(() => {

        firebase.firebase.auth = jest.fn().mockReturnValue({});
    });
    beforeEach(() => {
        firebaseMock = jest.fn();
        databaseMock = jest.fn();
    });


    test('hello world', () => {
        console.log('I am working well baby!!!!');
    });
    test('create user with email and password', () => {

    });

});
