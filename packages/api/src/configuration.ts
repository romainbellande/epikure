export interface Crypto {
  key: string;
  ivBase64: string;
}

export interface JwtToken {
  secret: string;
  expiresIn: number | string;
}

export interface Configuration {
  databaseUrl: string;
  port: number;
  crypto: Crypto;
  accessToken: JwtToken;
  refreshToken: JwtToken;
}

export const configuration = (): Configuration => ({
  databaseUrl: process.env.DATABASE_URL,
  port: Number(process.env.PORT),
  crypto: {
    key: process.env.CRYPTO_KEY,
    ivBase64: process.env.CRYPTO_IV_BASE64,
  },
  accessToken: {
    secret: process.env.ACCESS_TOKEN_SECRET,
    expiresIn: '1h',
  },
  refreshToken: {
    secret: process.env.REFRESH_TOKEN_SECRET,
    expiresIn: '60d',
  },
});
