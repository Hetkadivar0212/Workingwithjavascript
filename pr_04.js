{
  try {
    console.log(letVar); // ReferenceError: Cannot access 'letVar' before initialization
  } catch (error) {
    console.log(error);
  }

  try {
    console.log(constVar); // ReferenceError: Cannot access 'constVar' before initialization
  } catch (error) {
    console.log(error);
  }

  console.log(varVar); // Output: undefined (due to hoisting)

  let letVar = "I am let";
  var varVar = "I am var";
  const constVar = "I am const";

  console.log(letVar); // Output: I am let
  console.log(varVar); // Output: I am var
  console.log(constVar); // Output: I am const
}
