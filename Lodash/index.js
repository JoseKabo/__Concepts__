const lodash = require('lodash');

const privateKeys = [ 
    {user: 'block-', wallet: 'KzgaZa6opnqerycSKKVnUc9yuyNNBpTRbnpupfBBvModtxM4qNXi', date: '2021-08-11T12:30:00'}, 
    {user: 'block-', wallet: 'L2HHpwPYxjBfpWxbweso5XYT2L2KmCtDi7vTRzXJYYNZgGT3By7h', date: '2021-10-11T12:30:00'}, 
    {user: 'block-', wallet: 'L4b2y8CyGS8FHHK8NA6KRLLS59TcPeGou9Hd9MkSQQRbuhcmjnba', date: '2021-02-11T12:30:00'}, 
    {user: 'block-', wallet: 'L3R4zSZrcYrQR8378QaDUUSkRtYaQXiWipQQLycP56WVrvX48Y4W', date: '2021-08-03T12:30:00'}, 
    {user: 'block-', wallet: 'L1y29VQNLDU8f9MaEsrvHAUi1dF9TXkY4bFhbo2kLcRvukD3JGTU', date: '2021-08-01T12:30:00'}
];

// chain
const users = lodash
            .chain(privateKeys)
            .sortBy('date')
            .filter( (val) => val.date >= '2021-10-11T12:30:00' )
            .map( (val) => {
                const {user, ...rest} = val;
                return {
                    user: user + Math.random(),
                    ...rest
                }
            } )
            .value();

console.log('users :>> ', users);

// chunck
const newUsers = lodash.chunk(privateKeys, 3);
console.log('newUsers :>> ', newUsers);
    
