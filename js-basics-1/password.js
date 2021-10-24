const readline = require('readline');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,

});

reader.question("Welcome to Password Validator. What is your password?", function(answer){
		const str = (answer.length);
        let password = str

        if (answer.length <= 10) {
            console.log ("Too short. Must be at least 10 characters")
    }
        else {
            console.log ("Accepted.")
        
        }

		

		


		reader.close()

});