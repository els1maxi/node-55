import authService from '../services/authService.js';

const register = async (req, res, next) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const tokens = await authService.login(email, password);
        res.json(tokens);
    } catch (error) {
        next(error);
    }
};

const refreshToken = async (req, res, next) => {
    try {
        const { token } = req.body;
        const newTokens = await authService.refreshToken(token);
        res.json(newTokens);
    } catch (error) {
        next(error);
    }
};

export default {
    register,
    login,
    refreshToken,
};
