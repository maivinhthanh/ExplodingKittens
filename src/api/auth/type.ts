export type LoginParams = {
  email: string,
  password: string
}

export interface ResponseLogin {
  accessToken:  string;
  refreshToken: string;
}

export interface User {
  _id:        string;
  email:      string;
  password:   string;
  name:       string;
  picture:    null;
  hidden:     boolean;
  isonline:   boolean;
  datecreate: Date;
}

