function house(number) {
  let count = 0;
  let result = "";
  if (number < 0) {
    console.log("??????, ????????? ??????");
  }
  for (let i = 0; i < number; i++) {
    if (number >= 60) {
      count++;
      number -= 60;
	  if(count>4){
      result = `??? ${count} ????? ? ${number} ?????`;
	  }
	  else{
		 result =  `??? ${count} ???? ? ${number} ?????`
	  }
    }
    if (number < 60 || number == 0) {
		if(count>4){
		result = `??? 0 ????? ? ${number} ?????`;}
		else{
			 result =  `??? ${count} ???? ? ${number} ?????`
		}
    }
  }
  console.log(result);
}
house(150);