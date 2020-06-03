export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: string | null;
  // error message
  errorMessage: string | null;
}
