export const createUserValidationSchema = {
  username: {
    isLength: { 
      options: {min:3, max: 5}, 
      errorMessage: "Username must be atleast 3 and 5 characters" 
    },
    isString: { errorMessage: "Must be astring"},
    notEmpty: { errorMessage: "Must not be empty"}
  }
}