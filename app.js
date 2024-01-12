var cl = console.log;
// let person2 : persons = {
//     fname: 'rohan',
//     lname: "panchal",
//     age: 20,
//     email:'rohan'
// }
// cl(person2)
/////// nesting
var person3 = {
    fname: 'rohan',
    lname: "panchal",
    age: 20,
    email: 'rohan',
    child: {
        fname: 'rohan2',
        lanme: 'panchal2',
        age: 90,
        email: "",
        des: true,
    },
    hobby: [123, 'rohan', 1213, false]
};
cl(person3);
var toy2 = [12, "rohan", true];
cl(toy2);
function getrgb(color) {
    cl(color);
}
getrgb([23, 34, 45]);
var admin2 = {
    fname: 'rohan',
    lname: 'panchal',
    email: 'rohan@123',
    userrole: ['rohan', true]
};
///////////// enum////////
// Enums allow a developer to define a set of named constants.
var rep;
(function (rep) {
    rep["male"] = "male";
    rep["female"] = "female";
    rep["trangender"] = "transgender";
})(rep || (rep = {}));
var person = {
    fnmae: "rohan",
    lname: "panchal",
    age: 19,
    gender: rep.male
};
cl(person);
//////// "literals"/////
var x = "100"; /// asign the type >>literals
var y = 100; /// value|data as data type
var cricketer = {
    fname: "Rohit",
    lanme: "sharma",
    jersey: 45
};
function combine(n1, n2, returntype) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2;
    }
    if (returntype === 'as-string') {
        return result.toString();
    }
    if (returntype === 'as-number') {
        return +result;
    }
}
cl(combine(100, 200, "as-string")); ////>>> number     >>> string
cl(combine(100, 300, 'as-number')); /////>>> string >>>> number
////////////////////////////function////////
function add(n1, n2) {
    return n1 + n2;
}
function prime(num) {
    cl("this result is ".concat(num));
}
var test;
test = add;
cl(test(10, 40));
test = prime;
cl(prime(20));
var posts = {
    fname: "rohan",
    lnmae: "panchal",
    contact: 9112260191,
    email: "rohan@123"
};
var allposts = [
    {
        fname: "rohan",
        lnmae: "panchal",
        contact: 9112260191,
        email: "rohan@123"
    },
    {
        fname: "rohan2",
        lnmae: "panchal2",
        contact: 91122601913,
        email: "rohan@1234"
    }
];
var movies = {
    page: 3,
    pagelimit: 40,
    result: allposts,
    totalresults: 20000,
    toralpages: 1000
};
///////function  type//////
function getpost(id) {
    return posts;
}
function getallposts(posturl) {
    return allposts;
}
function getmovies() {
    return movies;
}
///////////  function return type///
//// unknown
//  let userdetails: any;
var userdetails; /// if we dontknow data type use  unknown
var username;
userdetails = 123;
//  username=userdetails
//  cl(username)
