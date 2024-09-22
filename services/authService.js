import jwt from 'jsonwebtoken';
import { hashPassword, comparePassword } from '../middleware/authMiddleware.js';
import userRepository from '../repositories/userRepository.js';

export const registerUser = async (userData) => {
    const hashedPassword = await hashPassword(userData.password);
    return userRepository.createUser({ ...userData, password: hashedPassword });
};

export const loginUser = async (email, password) => {
    const user = await userRepository.findUserByEmail(email);
    if (user && await comparePassword(password, user.password)) {
        const accessToken = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15m' });
        return { accessToken };
    } else {
        throw new Error('Invalid credentials');
    }
};
