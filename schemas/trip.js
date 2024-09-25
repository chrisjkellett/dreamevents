import { number, object, string } from "yup";

const schema = object({
  id: number(),
  title: string().max(32, "Must be max 32 characters").required("Required"),
  description: string()
    .max(256, "Must be max 256 characters")
    .required("Required"),
  photo_url: string().max(32, "Must be max 32 characters").required("Required"),
  status: string(),
});

export default schema;
