import { Typography } from "@mui/material";

const ItemTag = ({ name }: { name: string }) => {
  return (
    <Typography
      variant="itemText"
      sx={{ border: "1px solid #000", padding: 0.5 }}
    >
      {name}
    </Typography>
  );
};

export default ItemTag;
