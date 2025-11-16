import { Typography } from "@mui/material";

const ItemTag = ({ name }: { name: string }) => {
  return (
    <Typography
      variant="itemText"
      sx={{ padding: 0.5, backgroundColor: "#00000014" }}
    >
      {name}
    </Typography>
  );
};

export default ItemTag;
