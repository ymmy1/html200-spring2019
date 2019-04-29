function numberMultiplier(){
	let x = prompt('Enter first number');
	let y = prompt('Enter second number');
	let result = 0;

	result = (x * x) * (y * y);

	alert(x+ "*"+  x+ "*"+ "("+ y+ "*"+ y+ ")"+ "="+ result); 
}