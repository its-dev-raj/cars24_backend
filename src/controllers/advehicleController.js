import { validateVehicle } from "../validations/vehicleValidation.js";
import { VehicleModel } from "../models/vehicle.js";

export const Postadvehicle = async (req, res) => {
  try {
    const {
      name,
      brand,
      model,
      year,
      totalKmDriven,
      images,
      fuelType,
      owners,
    } = req.body;

    const { data, success } = validateVehicle({
      name,
      brand,
      model,
      year,
      totalKmDriven,
      images,
      fuelType,
      owners,
    });

    console.log(data);

    const item = await VehicleModel.create(data);
    return res.status(201).json({
      data: item,
      message: "product added successfully",
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
