export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserListOne {
  id?: string;
}

export interface Idecoded {
  id: string;
  email: string;
}
