export interface RegisterUser {
    username: string;
    password: string;
    name: string;
  }
  
export interface LoginUser {
  id: string,
  username: string,
  password: string,
  name: string,
}

export interface LoginResponse {
  name: string,
  token: string
}