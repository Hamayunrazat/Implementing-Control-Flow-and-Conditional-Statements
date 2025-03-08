let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
accessLevel = "Full access granted"; 
}
else if (userRole === "manager"){
accessLevel = "limited access granted";
}
else{
    accessLevel = "No access granted";
}

//nested loop
let isLoggedIn = "true";
let userMessage;
if (isLoggedIn) {
if (userRole === "admin") 
    userMessage = "Welcome, Admin!";
else{
    userMessage = "Welcome User!";
}
} else{
    userMessage = "Please Login to Access the System.";
}
// switch statement
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
// ternary
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";gi