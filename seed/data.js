import db from "../db/connection.js";
import Pet from "../models/pet.js"

const insertData = async () => {
    await db.dropDatabase();
    const pets = [
        {
            name: "Bob",
            type: "Dog",
            breed: "Labrador",
            age: 3,
        },
        {
            name: "Bob",
            type: "Dog",
            breed: "Labrador",
            age: 3,
        },
        {
            name: "Bob",
            type: "Dog",
            breed: "Labrador",
            age: 3,
        },
        {
            name: "Bob",
            type: "Dog",
            breed: "Labrador",
            age: 3,
        }]
        await Pet.create(pets);
        console.log("pets are in the house mf!!!");
        await db.close();
    };
    insertData();