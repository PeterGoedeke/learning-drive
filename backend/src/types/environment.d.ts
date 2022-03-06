declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV?: 'development' | 'staging' | 'production'
            DATABASE_URI?: string
            PORT?: string
            GOOGLE_APPLICATION_CREDENTIALS?: string
            DEFAULT_PICTURE_LINK: string
            FIREBASE_API_KEY: string
        }
    }
}

export {}
