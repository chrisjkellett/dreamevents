import { number, object, string, array } from "yup";

const itinerarySchema = object().shape({
  day: number().min(1).required("Day is required"),
  location: string().required("Location is required"),
  description: string().required("Description is required"),
});

const schema = object().shape({
  id: number().required("ID is required"),
  title: string().required("Title is required"),
  description: string().required("Description is required"),
  photo_url: string()
    .url("Must be a valid URL")
    .required("Photo URL is required"),
  status: string().oneOf(["todo", "completed"]).required("Status is required"),
  itinerary: array()
    .of(itinerarySchema)
    .min(1, "At least one itinerary item is required")
    .required(),
});

export default schema;
