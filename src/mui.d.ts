import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    itemName: React.CSSProperties;
    itemText: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    itemName?: React.CSSProperties;
    itemText?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    itemName: true;
    itemText: true;
  }
}
