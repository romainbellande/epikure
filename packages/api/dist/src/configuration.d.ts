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
export declare const configuration: () => Configuration;
