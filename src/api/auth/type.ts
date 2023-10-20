export type LoginParams = {
  email: string,
  password: string
}

export interface ResponseLogin {
  accessToken:  string;
  refreshToken: string;
}

export interface IUser {
  _id:        string;
  email:      string;
  password:   string;
  name:       string;
  picture:    null;
  hidden:     boolean;
  isonline:   boolean;
  datecreate: Date;
}

export interface JWTDecode {
  data: Data;
  iat:  number;
  exp:  number;
}

export interface Data {
  _id:     string;
  name:    string;
  email:   string;
  picture: null;
  hidden:  boolean;
}

