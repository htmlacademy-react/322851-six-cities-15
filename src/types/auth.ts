export type Token = string;

export type UserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: Token;
}

export type AuthData = {
  email: string;
  password: string;
};
