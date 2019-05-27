let ggt = function(a,b){ 
  let x = a > b ? b : a; 
  let y = ( x/2 == Math.floor(x/2) ) ? 1 : 2; 
  while ( x >= 0 && ( a%x != 0 || b%x != 0) ) 
  x -= y; 
  console.log( a%x, b%x, x ); 
};
ggt(9,93); // größter gemeinsamer Teiler (1.0)
ggt(8,24); // größter gemeinsamer Teiler (1.0)
ggt(8,32); // größter gemeinsamer Teiler (1.0)
ggt(9,27); // größter gemeinsamer Teiler (1.0)
ggt(80,2048); // größter gemeinsamer Teiler (1.0)

