export const signupReducer = (state, action) => {
  switch (action.type) {
    case "ON_CHANGE":
      return { ...state, [action.name]: action.payload };
    case "ERRORS":
      return { ...state, errors: action.payload };
    case "SUBMIT":
      return { ...state, isSubmit: true };
  }
};
