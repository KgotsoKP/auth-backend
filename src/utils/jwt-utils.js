import jwt from 'jsonwebtoken';
import environmemt from '../config/environment';

class JWTUtils{
    static generateAccessToken(payload, options ={}){
        const {expiresIn = '1d'} = options;
        return jwt.sign(payload, environmemt.jwtAccessToeknSecret, { expiresIn });
    }

    static generateRefreshToken(payload){
        return jwt.sign(payload,environmemt.jwtRefreshTokenSecret);
    }

    static verifyAccessToken(accessToken){
        return jwt.verify(accessToken, environmemt.jwtAccessToeknSecret);
    }

    static verifyRefreshToken(refreshToken){
        return jwt.verify(refreshToken, environmemt.jwtRefreshTokenSecret);
    }
}

export default JWTUtils;