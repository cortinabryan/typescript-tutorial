let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if(typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message:string,code:number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occured!', 500);





// never

// never return anything


// -

// unknown

// function that checks if the value is a string
// if it is we can safely assign the type string to unknown
// * it adds a layer of type checking basically

// unknown is better than any
// unknown isnt something you use all the time like any... but its better than using any