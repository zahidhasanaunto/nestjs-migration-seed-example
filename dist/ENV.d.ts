export declare const ENV_DEVELOPMENT = "development";
export declare const ENV_PRODUCTION = "production";
export declare const ENV_STAGING = "staging";
export declare const ENV: {
    port: number;
    env: string;
    isProduction: boolean;
    isStaging: boolean;
    isDevelopment: boolean;
    TYPEORM_CONNECTION: any;
    TYPEORM_HOST: string;
    TYPEORM_PORT: number;
    TYPEORM_USERNAME: string;
    TYPEORM_PASSWORD: string;
    TYPEORM_DATABASE: string;
    TYPEORM_SYNCHRONIZE: any;
    TYPEORM_LOGGING: any;
    TYPEORM_AUTOLOAD_ENTITIES: any;
};
