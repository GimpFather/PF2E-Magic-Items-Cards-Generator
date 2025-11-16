import { Typography } from "@mui/material";
import { memo } from "react";

const ItemTag = memo(({ name }: { name: string }) => {
  return (
    <Typography
      variant="itemText"
      sx={{ padding: 0.5, backgroundColor: "#00000014" }}
    >
      {name}
    </Typography>
  );
});

ItemTag.displayName = "ItemTag";

export default ItemTag;
