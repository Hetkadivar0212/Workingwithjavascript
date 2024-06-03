{
  try {
    console.log(letVar); // ReferenceError: Cannot access 'letVar' before initialization
  } catch (error) {
    console.log(error);
  }

  let letVar = "I am in the temporal dead zone";

  console.log(letVar); // Output: I am in the temporal dead zone
}
