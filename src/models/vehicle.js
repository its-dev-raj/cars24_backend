import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    totalKmDriven: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },

    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "Hybrid", "CNG", "LPG"], // you can adjust types
      required: true,
    },
    images: {
      type: [String], // Array of image URLs or paths
      default: [],
    },
    owners: {
      type: String,
      enum: ["1st owner", "2nd owner", "3rd owner", "4th owner"],
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

export const VehicleModel = mongoose.model("Car", VehicleSchema);
