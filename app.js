// a,b,c,d,e 

function a() {
    console.log("This is a function")
}
a(function b() {
    console.log("This is function b");
})
b(function c() {
    console.log("this is function c");
})
c(function d() {
    console.log("this is function d");
})
d(function e() {
    console.log("this is function e");
})
e();


function b () {
    console.log("this is function b");
}

function c () {
    console.log("this is function c");
}

function d () {
    console.log("this is function d");
}

function e () {
    console.log("this is function e");
}

function a () {
    console.log("this is function a");
}
a(b())

var arr = ["A","B","C","D"];

function split (arr) {
    if( arr[0] ) {
        console.log(arr.slice(0, 2));
    }
    else if (arr[1]) {
        console.log(arr.slice(1,3));
    }
    else if(arr[3]) {
        console.log(arr.slice(3));
    }
}
split();