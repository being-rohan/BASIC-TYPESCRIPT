let cl = console.log;


//// type elias
//////? doesnot give key and value
////  | ///////// sepration of data type keyb goes here

type persons = {
    fname: string,
    lname: string,
    age: number,
    email: string,
    child: {
        fname: string,
        lanme: string,
        age?: number,
        des: boolean,
        email: string | null

    },
    hobby: Array<string | number | boolean>//// union
}

// let person2 : persons = {
//     fname: 'rohan',
//     lname: "panchal",
//     age: 20,
//     email:'rohan'
// }
// cl(person2)



/////// nesting
let person3: persons = {
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
}
cl(person3)



////////// tupules////// fixed value 


type toy = [number, string, boolean]

let toy2: toy = [12, "rohan", true]
cl(toy2)


type rgb = [number, number, number]


function getrgb(color: rgb) {
    cl(color)
}
getrgb([23, 34, 45])
//////////////// tupules/////

type admin = {
    fname: string;
    lanme: string;
    email: string;
    userrole: (string | boolean)[]

}
let admin2 = {
    fname: 'rohan',
    lname: 'panchal',
    email: 'rohan@123',
    userrole: ['rohan', true]
}


///////////// enum////////
// Enums allow a developer to define a set of named constants.
enum rep {
    male = 'male',
    female = 'female',
    trangender = 'transgender'
}
type res = {
    fnmae: string,
    lname: string,
    age: number,
    gender: rep
}

let person: res = {
    fnmae: "rohan",
    lname: "panchal",
    age: 19,
    gender: rep.male
}

cl(person)



//////// "literals"/////

let x = "100";/// asign the type >>literals
const y = 100;/// value|data as data type

//////// literal union////

type Jersey = 45 | 54 | 65  /// this are types
type cricket = {
    fname: string,
    lanme: string,
    jersey: Jersey
}

let cricketer: cricket = {
    fname: "Rohit",
    lanme: "sharma",
    jersey: 45
}

// /////////////

// // type combuinable = number | string

// // function combine(n1: combuinable, n2: combuinable) {
// //     if (typeof n1 === "number" && typeof n2 === "number") {
// //         return n1 + n2
// //     } else {
// //         return n1.toString() + n2
// //     }

// // }

// // cl(combine(100, 300))////>>> number
// // cl(combine(100, 'rohan'))/////>>> string

// // number number >>> number
// // string string >> string
// // string number >>> string
// // number string >> string



type combuinable = number | string

function combine(n1: combuinable, n2: combuinable, returntype: "as-string" | 'as-number') {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2
    } else {
        result = n1.toString() + n2
    }
    if (returntype === 'as-string') {
        return result.toString()
    }
    if (returntype === 'as-number') {
        return +result
    }

}

cl(combine(100, 200, "as-string"))////>>> number     >>> string
cl(combine(100, 300, 'as-number'))/////>>> string >>>> number








////////////////////////////function////////


function add(n1: number, n2: number) {
    return n1 + n2
}

function prime(num: number) {
    cl(`this result is ${num}`)
}

let test: Function;
test = add;
cl(test(10, 40))
test = prime;
cl(prime(20))


/////////////////// creating an interface ///////
///example:
////interface and type, looks similar but interfaces can use
//  for "Declaration merging" and "Extends and implements" which "type" cannot do

// Creating a interface
// interface Geeks {
//     name: string;
//     age: number
//   }

//   interface Geeks {
//     email: string;
//   }

//   // Using the merged interface
//   const gfg: Geeks = {
//     name: " kgowda",
//     age: 20,
//     email: " kgowda@gmail.com"
//   };

//   console.log(gfg);

interface Ipost {
    fname: string,
    lnmae: string,
    contact: number,
    email: string
}

let posts: Ipost = {
    fname: "rohan",
    lnmae: "panchal",
    contact: 9112260191,
    email: "rohan@123"
}

let allposts: Ipost[] = [    ////// array of object
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


]

interface moviedata {
    page: number,
    pagelimit: number,
    result: Ipost[],
    totalresults: number,
    toralpages: number
}

let movies: moviedata = {
    page: 3,
    pagelimit: 40,
    result: allposts,
    totalresults: 20000,
    toralpages: 1000

}




///////function  type//////

function getpost(id: number): Ipost {//// for getting exact data
    return posts;
}

function getallposts(posturl: string): Ipost[] {
    return allposts
}

function getmovies():moviedata{
    return movies;
}

///////////  function return type///


//// unknown


//  let userdetails: any;
  let userdetails: unknown;  /// if we dontknow data type use  unknown

 let username :string;


 userdetails=123;

//  username=userdetails
//  cl(username)