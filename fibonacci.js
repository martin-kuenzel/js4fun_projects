// Fibonacci Zahlen berechnen
let fibonacci = (c) => { 
  c = ( typeof c == 'number' && c > -1 ? c : 0 );
  let ret = []; 
  for( let i=0,f0=0,f1=1; i<c; i++){ 
    let fi = f0+f1; 
    ret.push( [i,f0,f1] );  
    f0=f1; 
    f1=fi;  
  }
  return ret;
}; 

// Tests
for( let i of fibonacci(-1) ) console.log(i);
for( let i of fibonacci() ) console.log(i);
for( let i of fibonacci(undefined) ) console.log(i);
for( let i of fibonacci(null) ) console.log(i);
for( let i of fibonacci("NaN") ) console.log(i);
for( let i of fibonacci(0) ) console.log(i);
for( let i of fibonacci(1) ) console.log(i);
for( let i of fibonacci(14) ) console.log(i);
