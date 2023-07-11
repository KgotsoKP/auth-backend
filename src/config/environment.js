//All environmemt variables we are going to use in our appilcation

const environmemt = {
    port : parseInt(process.env.ENV_PORT) || 8080,
    nodeEnv : process.env.NODE_ENV || 'production',
    saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
    jwtAccessToeknSecret: process.env.JWT_ACCESS_TOKEN_SECRET || '7b8091c8eeebc829ffc21889e10b177eaef511249b78c108605cc2217486baf2a88baf9b48f50ef4c51fff2cf355758d98e56d68fc831c5ac6ec98826b7f9f0f',
    jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || '546c4722cdeb0428c80237e56a476ed37c4791125c2184c1834e87f0912f197047da7505ec123c87b01e9e7c3974f605a9bbad7b2925aede9a46ced835fa87d6'
}