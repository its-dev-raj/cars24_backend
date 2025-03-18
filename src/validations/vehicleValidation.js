import { z } from "zod";

const vehicleValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  model: z.string().min(1, "Model is required"),
  year: z.number().min(1886, "Enter a valid year"),
  totalKmDriven: z.number().min(0, "KM driven must be positive"),
  fuelType: z.enum(["Petrol", "Diesel", "Electric", "Hybrid", "CNG", "LPG"]),
  images: z.array(z.string().url("Image must be a valid URL")).optional(),
  owners: z.enum(["1st owner", "2nd owner", "3rd owner", "4th owner"]),
});

export const validateVehicle = (data) => {
  const result = vehicleValidationSchema.safeParse(data);
  if (!result.success) {
    console.error(result.error.format());
  }
  return {
    result: result.success,
    data: result.data,
  };
};
