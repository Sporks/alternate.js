const input = process.argv[2];

function alternate(str) {
    let ret = "";
	for(i=0; i<str.length; i++){
        if(i%2 === 1){
            ret += str[i].toUpperCase();
        }
        else {
            ret += str[i].toLowerCase();
        }
    }
	return ret;
}

console.log(alternate(input));
