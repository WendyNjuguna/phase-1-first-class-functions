
function receivesAFunction(callback){
callback();
}
function returnsANamedFunction(){
    return function namedFunction(){
        return "wendy";
    }
}
function returnsAnAnonymousFunction(){
    return() =>"elegant";
}