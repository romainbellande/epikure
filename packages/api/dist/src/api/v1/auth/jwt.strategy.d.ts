import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Configuration } from '@/configuration';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService<Configuration>);
    validate(payload: any): Promise<{
        userId: any;
        email: any;
    }>;
}
export {};
