import { getConnection } from '../database/database'

const getLanguages = async (req, res) => {
    try {
        const connection = await getConnection();

        const result = await connection.query("SELECT id, name, programmers FROM language");

        if(result.length > 0){
            res.json(result);
        } else {
            res.json({
                "message": "No hay registros"
            });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getLanguage = async (req, res) => {
    try {
        // Se lee parametros enviados en la url => /:id
        //console.log(req.params);
        //const { id } = req.params;

        // Se lee el body json que se envia
        const { id } = req.body;

        const connection = await getConnection();

        const result = await connection.query("SELECT id, name, programmers FROM language WHERE id = ?", id);

        if(result.length > 0){
            res.json(result);
        } else {
            console.log(result.status)
            res.json({
                "message": "No hay registros"
            });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addLanguage = async (req, res) => {
    try {
        const { name, programmers } = req.body;
        
        if(name ===undefined || programmers===undefined){
            res.status(400).json({ message: "Bad Request. Please fill all field" })
        }

        const language = { name, programmers }; // Creamos un objeto con los atributos

        const connection = await getConnection();

        const result = await connection.query("INSERT INTO language SET ?", language)

        res.json({ message: "Lenguage added"})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateLanguage = async (req, res) => {
    try {
        const { id, name, programmers } = req.body;

        if(id === undefined || name ===undefined || programmers===undefined){
            res.status(400).json({ message: "Bad Request. Please fill all field" })
        }

        const language = { name, programmers }; // Creamos un objeto con los atributos

        const connection = await getConnection();

        const result = await connection.query("UPDATE language SET ? WHERE id = ?", [language, id]);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteLanguage = async (req, res) => {
    try {
        // Se lee parametros enviados en la url => /:id
        //console.log(req.params);
        //const { id } = req.params;

        // Se lee el body json que se envia
        const { id } = req.body;

        const connection = await getConnection();

        const result = await connection.query("DELETE FROM language WHERE id = ?", id);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getLanguages,
    getLanguage,
    addLanguage,
    updateLanguage,
    deleteLanguage
}