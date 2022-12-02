import {Sequelize } from 'sequelize';

const sequelize = new Sequelize('sys', 'root', '17011995', {
    dialect: 'mysql',
    host: '127.0.0.1',
    define: {
        timestamps: false
    }
});

export default sequelize;