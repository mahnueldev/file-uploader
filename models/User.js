module.exports = function (connDB, DataTypes) {
  const User = connDB.define(
    'user',
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
      },

      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      image: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  User.sync({ alter: true })
    .then(() => {
      console.log('Database synced');
    })
    .catch((err) => {
      console.error('Error while syncing database:', err);
    });

  return User;
};
