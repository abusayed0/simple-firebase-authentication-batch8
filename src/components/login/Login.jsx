import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [loggedUser, setLoggedUser] = useState({});
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                const userData = res.user;
                // console.log(userData);
                setLoggedUser(userData);
            })
            .catch(error => console.log(error))
    };

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log("logout sucessful");
                setLoggedUser({});
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <section>
            <div>
                {
                    loggedUser.uid
                        ?
                        <button onClick={handleLogOut}>Logout</button>
                        :
                        <button onClick={handleGoogleSignIn}>Google Login</button>
                }
            </div>
            {
                loggedUser.uid
                &&
                <div>
                    <h2>Name : {loggedUser.displayName}</h2>
                    <p>Email : {loggedUser.email}</p>
                    <img src={loggedUser.photoURL} alt="" />
                </div>

            }
        </section>
    );
};

export default Login;