const sequelize = require("./config/database");
const User = require("./models/User");

sequelize.sync({ force: true }) 
  .then(async () => {
    console.log("Tables created");

     // CREATE
 
    const user = await User.create({
      name: "Sowmiya",
      email: "s@gmail.com"
    });
    console.log("User created:", user.toJSON());

   // READ
    
    const allUsers = await User.findAll();
    console.log("All users:", allUsers);

    const oneUser = await User.findOne({
      where: { email: "s@gmail.com" }
    });
    console.log("Single user:", oneUser.toJSON());

      // UPDATE
 
    await User.update(
      { name: "Sowmya R" },
      { where: { email: "s@gmail.com" } }
    );
    console.log("User updated");

    // DELETE

    await User.destroy({ where: { email: "s@gmail.com" } });
    console.log("User deleted");
  })
  .catch(err => console.log(err));
