import { Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const AppPreview = () => {
  const { palette } = useTheme();

  const modeColor = palette.primary.main;

  return (
    <Stack
      gap={1}
      sx={{
        padding: 2,
        borderRadius: 0,
        border: `3px solid ${modeColor}`,
        maxWidth: 350,
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Stack gap={1} direction="row" alignItems="center">
        <Typography variant="h5" fontWeight={700}>
          <FormattedMessage id="APP.ICON" />
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          <FormattedMessage id="APP.TITLE" />
        </Typography>
      </Stack>
      <Stack gap={0.75}>
        <Typography variant="body1">
          <FormattedMessage id="APP.DESCRIPTION.1" />
        </Typography>
        <Typography variant="body1">
          <FormattedMessage id="APP.DESCRIPTION.2" />
        </Typography>
        <Typography variant="body1">
          <FormattedMessage id="APP.DESCRIPTION.3" />
        </Typography>
        <Typography variant="body1">
          <FormattedMessage id="APP.DESCRIPTION.4" />
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AppPreview;
