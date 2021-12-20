import moduleName from 'sequelize';

import matches from './matches';
import player from './player';
import playerSkill from './playerSkill';
import team from './team';

player.belongsTo(playerSkill, { foreignKey: 'id_skills' });
player.belongsTo(team, { foreignKey: 'id_team' });
playerSkill.hasMany(player, { foreignKey: 'id' });
team.hasMany(player, { foreignKey: 'id' });

export { matches, player, playerSkill, team };