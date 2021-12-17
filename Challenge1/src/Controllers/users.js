import { request as req, response as res } from 'express';

const usersGET = (req, res) => {
    res.status(200).json({
        ok: true,
        msg: "Welcome"
    });
}

export {
    usersGET
}