import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
            const destination = '/';
            navigate(destination);
            setAuthError('');
            const newUser = { email, displayName: name}
            setUser(newUser);
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
        })
        .catch((error) => {
            setAuthError(error.message);
            console.log(error);
        })
        .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const destination = '/';
            navigate(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setAuthError('');
                const destination = '/';
                navigate(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            // sign out successful
        })
        .catch((error)=> {
            // error occur
        })
        .finally(() => setIsLoading(false));
    }
    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;