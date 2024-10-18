import mongoose from "mongoose";
const Schema = mongoose.Schema;

const petSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, min: 0 },
    breed: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Pet", petSchema);