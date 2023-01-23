const { Sequelize } = require('sequelize');

module.exports = function (connDB) {
  const File = connDB.define(
    'file',
    {
      
      name: { type: Sequelize.STRING },
      format: { type: Sequelize.STRING },
      url: { type: Sequelize.STRING }
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
