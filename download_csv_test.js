// dynamically create a CSV filedownload
// Test Environment
(()=>{

/* SAVING PROCESS
*/
let saveFile = (name, type, data) => {
	if (data != null && navigator.msSaveBlob)
		return navigator.msSaveBlob(new Blob([data], { type: type }), name);

	let a = document.createElement("a") 
  a.style.display = 'none';
  let url = window.URL.createObjectURL(new Blob([data], {type: type}));
	a.setAttribute("href", url);
	a.setAttribute("download", name);
	document.body.appendChild(a);
	a.click();
  window.URL.revokeObjectURL(url);
  a.parentNode.removeChild(a);
}

/* CREATE CSV TEST DATA
*/
let data = (()=>{
    // define the data.table structure
    let NROW = 23 // amount of rows to be created
    let index = 0 // incremental index startpoint
    let creation_algorithm = {
        "id":()=>{return index++;},
        "col1":()=>{return Math.random();},
        "col2":()=>{return Math.random();}
    }

    // fill the data.table with random data, following the defined structure
    let data = [];
    ( (nrow) => { 
        nrow=nrow?nrow:0;
        while( nrow-- > 0 )  { 
            let o = []; 
            Object.keys(creation_algorithm).map( x => { o.push(creation_algorithm[x]()); }); data.push(o); }; 
    } )(NROW)
	return [Object.keys(creation_algorithm)].concat(data)
})()
//console.log(data.map(x=>x.join(',')).join('\n'))
saveFile('Example.csv', 'data:attachment/text', data.map(x=>x.join(',')).join('\n'));

})()
