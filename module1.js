exports.addition=function(a,b){
    return parseInt(a)+parseInt(b);
}

exports.subtract=function(a,b){
    return parseInt(a)-parseInt(b);
}

exports.multiply=function(a,b){
    return parseInt(a)*parseInt(b);
}
exports.division=function(a,b){
    return parseInt(a)/parseInt(b);
}
exports.square=function(a){
    return parseInt(a)*parseInt(a);
}

exports.sum=function(a,b,...c){
    s=a+b;
    for(var i=0;i<c.length;i++){
        s+=c[i];
    }
    return s;
}
exports.addition1=function(a,b,...c){
    console.log(a,b);
    console.log(c);
    s=a+b;
    for(var i=0;i<c.length;i++){
        s+=c[i];
    }
    return s;
}