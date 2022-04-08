export const formValueReducer = (state, action) => {
  switch (action.type) {
    case "ON_CHANGE":
      return { ...state, [action.name]: action.payload };
    case "VALIDATE":
      return { ...state, errors: action.payload };
    case "TEST":
      return {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
        errors: {},
      };
  }
};
