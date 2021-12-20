import express from 'express';
import cors from 'cors';

import { player, playerSkill, team } from './models/index';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async(_, res) => {
    try {
        const players = await player.findAll({
            include: [{
                    model: playerSkill,
                },
                {
                    model: team,
                },
            ],
        });
        res.json({
            status: true,
            data: players,
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            status: false,
            data: error,
        });
    }
});

export default app;