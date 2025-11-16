import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import EmojiSliderRow from "../components/EmojiSliderRow";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import ModePreview from "../components/ModePreview";
import { useNavigate } from "react-router";

const HeroPage = () => {
  const navigate = useNavigate();
  return (
    <Stack
      gap={5}
      alignItems="center"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <EmojiSliderRow />
      <Stack
        gap={0.25}
        justifyContent="center"
        sx={{
          marginTop: 10,
        }}
      >
        <Typography variant={"h1"} sx={{ textAlign: "center" }}>
          <FormattedMessage id="HERO.TITLE" />
        </Typography>
        <Typography variant={"h5"} sx={{ textAlign: "center" }}>
          <FormattedMessage id="HERO.SUBTITLE" />
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={2} sx={{ marginTop: 10 }}>
        <ModePreview />
      </Stack>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ borderRadius: 0 }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={() => navigate("/make-items")}
      >
        <FormattedMessage id="HERO.BUTTON.TEXT" />
      </Button>
    </Stack>
  );
};

export default HeroPage;
