import Pet from "../models/pet.js";

export const getPets = async (req, res) => {
  try {
    const pets = await Pet.find({});
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPet = async (req, res) => {
  try {
    const createdPet = await Pet.create(req.body);
    res.status(201).json(createdPet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPet = async (req, res) => {
    try {
       const pet = await Pet.findById(req.params.petId);
       if (!pet) {
         res.status(404);
         throw new Error("Pet not found");
       }
       res.status(200).json(pet);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
};
export const updatePet = async (req, res) => {};
export const deletePet = async (req, res) => {};
