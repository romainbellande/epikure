import { SignInResponse } from '@/shared/auth';
export declare class AccessTokenResponse implements SignInResponse {
    accessToken: string;
    refreshToken: string;
}
