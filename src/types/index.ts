export type Token = {
  token: string;
  refreshToken: string;
};

export type TokenInfo = {
  userType: string;
  email: string;
  name: string;
  iat: number;
  exp: number;
};

export type Session = {
  expires: string;
  user: User;
};

export type SuccessResponse = {
  message: string;
};

export type ErrorResponse = {
  statusCode: number;
  message: string;
};

export type UserSignupResponse = {
  id: string;
  name: string;
  email: string;
  isValid: boolean;
  isAgree: boolean;
  userType: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type User = Omit<UserSignupResponse, '__v' | 'createdAt' | 'updatedAt'> &
  Token;

export type UserLoginResponse = Token & {
  user: UserSignupResponse;
};

export type GetProductResponse = {
  _id: string;
  productName: string;
  productUrl: string;
  productVideoUrl: string;
  thumbnail: string;
  status: boolean;
  theme: {
    _id: string;
    name: string;
  };
};
