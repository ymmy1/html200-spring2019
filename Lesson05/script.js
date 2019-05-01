let balance = 1000;
function bClick(){
	alert("Your current balance = $"+balance);
}

function wClick(){
	let w = prompt('Enter withdrawal amount');
	balance = balance - Number(w);
	if(balance >= 0){
		if (w >= 0){
		
			if(balance <= 300){
				alert("WARNING! Your balance is at low rate of $"+balance);
				let o = prompt("Would you like to continue withdrawal? Yes/No");
	
				if(o = "Yes"){
					alert("Withdrawal Completed. Your balance = $"+balance);
				}
	
				else if (o = "No"){
					balance = balance - Number(w);
					alert("Withdrawal failed.");
				}
	
			}
			else {
				if (balance >= 0) {
			alert("Withdrawal Completed. Your balance = $"+balance);
	}
			else {
			balance = balance + Number(w);
			alert("You cannot withdraw that much, your balance is $"+ balance);
	}
			}
		}
	
		else {
			balance = balance + Number(w);
			alert("Withdrawal failed.");
		}
	} 
	else {
		balance = balance + Number(w);
		alert("You cannot withdraw that much, your balance is $"+ balance);
}}

function dClick(){
	let d = prompt('Enter Deposit amount');
	balance = balance + Number(d);

	if (d >= 0){
	
		if (d <= 50000) {
			alert("Deposit Completed. Your balance = $"+balance);
	}
		else {
			balance = balance - Number(d);
			alert("Your total deposit cannot be more than $50,000. please try again. Current balance = $"+ balance);
	}
	}

	else {
		balance = balance - Number(d);
		alert("Deposit failed.");
	}
}