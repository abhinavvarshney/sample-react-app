// import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
// const auth = getAuth();
// export const login = async({email, password})=>{
//     return await signInWithEmailAndPassword(auth,email, password).then((userCreds) => {
//         console.log("Login",userCreds);
//         return userCreds;
//     }).catch((err) => {
//         console.log("Error",err.message,err.code);
//         return { err: { message:err.message,code:err.code} } ;
//     });
// }

export const login = ({email,password}) => {
    if(email === "admin@gmail.com" && password === "adminapp"){
        return {
            accessToken: "someradomstring",
            user:{
                name: 'Admin',
                email: 'admin@gmail.com'
            }
        }
    }
    return {
        error :{ 
            message: 'Invalid Auth Details',
            code: '400'
        }
    }
}