module.exports = (sequelilze, DataTypes) => {
    const Posts = sequelilze.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false 
        },
    })

    return Posts;
}