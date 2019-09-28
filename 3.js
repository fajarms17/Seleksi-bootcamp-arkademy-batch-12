function sorting(str){
    var Regex = /\d/ ;
    var result= Regex.test(str);


	if(result===true){
  	return str.split('').sort().join('').replace(/\D/g,'');  
    
	}
  	else{
    return "No number found in parameter";
	}
}

console.log(sorting("Fajarms1784903754"));