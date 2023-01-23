const { Sequelize } = require('sequelize');

module.exports = function (connDB) {
  const File = connDB.define(
    'file',
    {
      originalname: { type: Sequelize.STRING },
      filename: { type: Sequelize.STRING },
      mimetype: { type: Sequelize.STRING },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  File.sync({ alter: true })
    .then(() => {
      console.log('Database synced');
    })
    .catch((err) => {
      console.error('Error while syncing database:', err);
    });

  return File;
};
