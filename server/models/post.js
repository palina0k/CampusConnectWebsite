module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        title: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        freeTableName: true
    });

    return Post;
};