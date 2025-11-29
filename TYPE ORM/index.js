require("reflect-metadata");
const { DataSource } = require("typeorm");
const { User } = require("./User");

// Connect to MySQL
const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Sowmiya@14",
    database: "mysql",
    synchronize: true, // auto-create tables
    logging: true,
    entities: [User],
});

async function main() {
    await AppDataSource.initialize();
    console.log("Database connected");

    const userRepo = AppDataSource.getRepository(User);

    // CREATE OR IGNORE DUPLICATE
    let user = await userRepo.findOneBy({ email: "s@gmail.com" });
    if (!user) {
        user = userRepo.create({ name: "Sowmiya", email: "s@gmail.com" });
        await userRepo.save(user);
        console.log("User created:", user);
    } else {
        console.log("User already exists:", user);
    }

    // READ
    const users = await userRepo.find();
    console.log("All users:", users);

    // UPDATE
    await userRepo.update({ email: "s@gmail.com" }, { name: "Sowmya R" });
    console.log("User updated");

    // DELETE
    // await userRepo.delete({ email: "s@gmail.com" });
    // console.log("User deleted");
}

main().catch(console.error);

