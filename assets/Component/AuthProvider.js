import React , {useState , createContext , useContext } from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth'


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // console.log("User In AuthProvider :" , user);

  return (
    <AuthContext.Provider
    value={{
        user,
        setUser,
        login: async (email , password) =>{
            try {
                await auth().signInWithEmailAndPassword(email , password)
                
            } catch (error) {
                console.log(error);
                alert(error)
            }
        },
        register: async (email , password) =>{
            try {
                await auth().createUserWithEmailAndPassword(email, password);
            } catch (error) {
                console.log(error)
                alert(error)
            }
        },
        logout: async (email , password) =>{
            try {
                await auth().signOut(); 
            } catch (e) {
                console.log(e);
            }
        },
        resetPassword: async (email) =>{
            try {

                await auth().sendPasswordResetEmail(email).then( () =>{
                    console.log("Reset Password link send to your email Thanks!")
                    alert("Reset Password link send to your email Thanks!\n Please Check your inbox/spam folder .")
                })
            } catch (error) {
                alert(error)
                
            }
        }
    }}
    >
        
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;