function closeMe(){
    document.getElementById("demo").innerText="i love to play with this";
    
}
function openMe(){
    document.getElementById("demo").innerText="i am working with you";
    
}






// let users=[
//     {
//         name:"kambang",
//         email:"kambang@gmail.com",
//         gender:"male"
//     }]
import * as Data from "./backend.js";
    let users=usernames.map((iterm,index)=>{
        let user={}
        user.name=usernames[index]
        user.email=emails[index]
        user.gender=gender[index]
        return user
    })

    console.log(users);