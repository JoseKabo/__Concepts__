import { name, image, datatype } from 'faker';

const createPlayer = (id_team) => {
    return {
        name: name.firstName() + ' ' + name.lastName(),
        age: datatype.number(30),
        picture: image.avatar(),
        id_skills: createSkills(),
        id_team,
    };
};

const createSkills = () => {
    return {
        id: datatype.uuid(),
        speed: datatype.number(10),
        stamina: datatype.number(10),
        mentality: datatype.number(10),
        control: datatype.number(10),
    };
};

export { createPlayer, createSkills };