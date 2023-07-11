import bcrypt from 'bcrypt';
import environmemt from '../config/environment';

class PasswordUtils {
    static async hashPassword(password){
        return bcrypt.hash(password. environmemt.saltRounds);
    }

    static async  comparePasswords(password, hashedralPassword){
        return bcrypt.compare(password, hashedPassword);
    }
}

export default PasswordUtils;