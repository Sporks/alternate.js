const input = process.argv[2]

function alternate(str) {
    let ret = ""
	for(i=0; i<str.length; i++){
		let temp = ""
        if(i%2 === 1){
            ret += str[i].toUpperCase()
        }
        else {
            ret += str[i]
        }
    }
	return ret
}

console.log(alternate(input))
