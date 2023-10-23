import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config"
export const myContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const createUser = (email, password,) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)


    }
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)


    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        createUser,
        user,
        logOut,
        signIn,
        googleLogIn,
        loading
    }
    return (
        <myContext.Provider value={authInfo}>
            {children}
        </myContext.Provider>
    );
};

export default AuthProvider;