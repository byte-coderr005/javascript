let userRole = ["admin", "user","manager"];
let userRole1 = prompt();
let accessLevel;
let userMessage;
if  (userRole1 === userRole[0]){
    accessLevel = "Full access granted";
}else if 
    ( userRole1 === userRole[1])
{
    accessLevel = "Limited access granted";
}else if
    (userRole1 === userRole[2]){
    accessLevel = "Limited access granted";
}
else
    accessLevel = "No access granted";


console.log("Access Level:",accessLevel);
let isLoggedIn = true;

if(isLoggedIn){
    if(userRole1 === "admin"){
        userMessage = "Welcome,Burak";
    }else if (userRole1 === "user"){
        userMessage = "Welcome, User!";
    }else{
        userMessage = "Please log in to access the system.";
    }
    console.log("User message: ", userMessage);
    let userType = "subscriber";
    let userCategory;
    switch(userType) {
        case "admin":
            userCategory = "Admin";
            break;
        case "manager":
            userCategory = "Manager";
            break;
        case "subscriber":
            userCategory = "Subsricber";
            break;
            default:
                userCategory = "Unknown";
    }
    console.log("User Category:", userCategory);
    let isAuthenticated = true;
    let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

    console.log("Authentication Status:",authenticationStatus);
}