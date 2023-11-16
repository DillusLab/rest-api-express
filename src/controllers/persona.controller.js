import { getConnection } from '../database/database'

const loginPersona = async (req, res) => {
    try {
        const { user, password } = req.body;

        if(user === undefined || password === undefined){
            res.status(400).json({ message: "Bad Request. Please fill all field" })
        }

        const connection = await getConnection();

        const result = await connection.query("SELECT * FROM persona WHERE user = ? AND password = ?", [user, password]);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getPersona = async (req, res) => {
    try {
        const connection = await getConnection();

        const result = await connection.query("SELECT * FROM persona");

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    loginPersona,
    getPersona
}