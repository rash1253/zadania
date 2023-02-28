function house(number) {
  let count = 0;
  let result = "";
  if (number < 0) {
    console.log("Ошибка, проверьте данные");
  }
  for (let i = 0; i < number; i++) {
    if (number >= 60) {
      count++;
      number -= 60;
	  if(count>4){
      result = `Это ${count} часов и ${number} минут`;
	  }
	  else{
		 result =  `Это ${count} часа и ${number} минут`
	  }
    }
    if (number < 60 || number == 0) {
		if(count>4){
		result = `Это 0 часов и ${number} минут`;}
		else{
			 result =  `Это ${count} часа и ${number} минут`
		}
    }
  }
  console.log(result);
}
house(150);