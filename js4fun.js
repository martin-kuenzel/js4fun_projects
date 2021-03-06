/// various Extensions 4 fun ///

// strangeness creates uniqueness
var createUId = ( len=5 ) => { 
  let rs = "";
  len = ( !len ? 5 : len );
  let _len = len;

  while( --len > -1 ){
	  let str = Array.from( `${ (Math.random()*1023) + (Math.random()*4091) + (Math.random()*253) }` ).shuffle(5).join("").charAt(0);
	  rs = `${rs}${str}`;
  }
  rs = btoa(rs);
	while( rs.match(/[^0-9A-Z]/i) || rs.match(/[MNO]/i) ){
	  rs = rs.replace(/[^0-9A-Z]/i,`${Math.random()/(new Date()).getTime()}`.charAt(0)).replace(/[MNO]/i,`${Math.random()/(new Date()).getTime()}`.charAt(0));
  }
	return rs.substr(0,_len);
};

// shuffle arrays by n-times
Array.prototype.shuffle = function(times=1){ 
  let o = []; 
  this.reverse().map((x,i)=>{ 
    if( Math.random()>.5 ) o.push(x); else o.unshift(x); 
  }); 
  if ( times > 0 ) o = o.shuffle(--times); 
  return o; 
}; 

// general shortcutting //
let dqs = (q) => document.querySelector(q);
let dqsa = (q) => document.querySelectorAll(q);
let dsid = (q)=>document.getElementById(q);
let dscn = (q)=>document.getElementsByClassName(q);
let dstn = (q) => document.getElementsByTagName(q);

Node.prototype.prev = function(){return this.previousElementSibling;}
Node.prototype.next = function(){return this.nextElementSibling;}

Node.prototype.qs = function(q){return this.querySelector(q);}
Node.prototype.qsa = function(q){return this.querySelectorAll(q);}
Node.prototype.pn = function(){return this.parentNode;}
Node.prototype._pn = function(){return this.pn().prev();}

Node.prototype.tC = function(){ return this.textContent; }

NodeList.prototype.asArr = HTMLCollection.prototype.asArr = function(){ return Array.from(this); }
NodeList.prototype.map = HTMLCollection.prototype.map = function(func){ return Array.from(this).map(func); }
NodeList.prototype.filter = HTMLCollection.prototype.filter = function(func){ return Array.from(this).filter(func); }


// MATHEMATICAL STUFF //

// shortcuts eg. (9).quad() == Math.pow(9,2)
//Number.prototype.quad = function(){return Math.pow(this,2);}; // ( Not needed anymore because one can do (a ** 2) )
Number.prototype.sqr = function(){return Math.sqrt(this,2);};

Number.prototype.abs = function(){return Math.abs(this);};
Number.prototype.cos = function(){return Math.cos(this);};
Number.prototype.sin = function(){return Math.sin(this);};
Number.prototype.tan = function(){return Math.tan(this);};
Number.prototype.atan = function(){return Math.atan(this);};
Number.prototype.acos = function(){return Math.acos(this);};
Number.prototype.asin = function(){return Math.asin(this);};

// ( Not needed anymore because one can do (a ** 2) )
// Number.prototype.pow = function(x=1){x=(x?`${x}`.replace(/[^0-9]/g,''):1);x=(x.length<1?1:Number(x));x=isNaN(x)?1:x; return Math.pow(this,x);};

Number.prototype.floor_rad = function(){ let o = this; o -= ( o - (o % 90) ); return o; }

Math.sum = function(...args){ let ret = 0; for(arg of args) ret += (typeof arg == "number" ? arg : 0); return ret; };
Math.prod = function(...args){ 
  let ret; 
  Array.from(args).filter( x => ( typeof x == "number" ) ).forEach( x => ret = (!ret?1:ret) * x ); 
  return ret;
};

// shortcut to Math.pow(a,b) ( Not needed anymore because one can do (a ** b) )
//let POW = (a,b) => Math.pow(a,b);

// other geometry funcs //

// Umfang: u = 2·π·r
let getKreisUmfang = r => 2 * Math.PI * r;

// Pythagoras: (a²+b²) = (c²)
let getPythagoras = (a,b) => ( (a**2) + (b**2) ).sqr();


class Phys {
    static atomic_mass            = new this( 1.66055,   -27, 'kg');
    static electron_mass          = new this( 9.10953,   -31, 'kg');
    static neutron_mass           = new this( 1.67482,   -27, 'kg');
    static proton_mass            = new this( 1.67261,   -27, 'kg');
    static avogadro_number        = new this( 6.02205,    26, 'kmol⁻¹');
    static boltzmann_const        = new this( 1.38066,   -23, 'JK⁻¹');
    static elemental_charge       = new this( 1.602189,  -19, 'As');
    static gas_const              = new this( 8.3143,      4, 'JK⁻¹kmol⁻¹');
    static grav_const             = new this( 6.672,     -11, 'Nm²kg⁻²');
    static induction_const        = new this( 1.2566,    - 6, 'VsA⁻¹m⁻¹');
    static dielectric_const       = new this( 8.8542,    -12, 'AsV⁻¹m⁻¹');
    static lightspeed_vacuum      = new this( 2.99792458,  9, 'ms⁻¹'); // expands Number.MAX_SAFE_INTEGER in calculations otherwise therefore written as c*10e9
    static planck_const           = new this( 6.626176,  -34, 'Js');
    static stefan_boltzmann_const = new this( 5.6073,    - 8, 'Wm⁻²K⁻⁴');

    constructor(value = 0, decimal_precision = 1, unit=''){
        this.value = value || 0;
        this.unit = unit || '';
        this.decimal_precision = decimal_precision || 1;
    }
    convNumber2Phys(n=0){ n=n||0; n=Object.getPrototypeOf(n) == Object.getPrototypeOf(new Phys())?n:new Phys(n); return n; }
    multi(p = new Phys()){ p=this.convNumber2Phys(p); return new Phys(this.value*p.value,this.decimal_precision+p.decimal_precision,`${this.unit}${p.unit}`); }
    quad(){ return this.multi(this); }
    sqr(){ this.value = this.value.sqr(); this.unit = `√(${this.unit})`; return this; }
}
