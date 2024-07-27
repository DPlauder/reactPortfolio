import { FormControl, FormLabel, Button } from "@mui/material";

export default function Form() {
  return (
    <FormControl defaultValue="">
      <FormLabel sx={{ color: "white" }}>Name</FormLabel>
      <input type="text" />
    </FormControl>
  );
}
