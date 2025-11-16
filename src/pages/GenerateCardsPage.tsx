import { Button, Grid, Container, Stack, Divider } from "@mui/material";
import ItemCard from "../components/ItemCard";
import { getMagicItems } from "../localStorage";
import html2canvas from "html2canvas";
import { useState } from "react";
import PreviewDialog from "../components/PreviewDialog";
import type { MagicItem } from "../types";
import { useNavigate } from "react-router";
import { ArrowLeft, Cards } from "@phosphor-icons/react";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

const GenerateCardsPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [canvasUrl, setCanvasUrl] = useState<string | null>(null);
  const [magicItems] = useState<MagicItem[]>(() => getMagicItems());

  const A4_PAPER_STYLES = {
    width: "21cm",
    height: "29.7cm",
    border: "1px dashed #000",
    padding: 20,
  };

  const printCards = () => {
    const input = document.getElementById("cards-container");
    if (!input) return;
    setCanvasUrl(null);
    setOpen(true);
    html2canvas(input, {
      scale: 10,
    }).then((canvas) => {
      setCanvasUrl(canvas.toDataURL());
    });
  };

  return (
    <Container
      maxWidth="lg"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Divider sx={{ marginBottom: 2, borderColor: "#000" }} />
      <Stack direction="row" gap={2} sx={{ marginY: 2 }}>
        <Button
          onClick={() => navigate("/make-items")}
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<ArrowLeft size={20} />}
          sx={{ borderRadius: 0 }}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FormattedMessage id="GENERATE_CARDS.BUTTON.TEXT.BACK" />
        </Button>
        <Button
          onClick={printCards}
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: 0 }}
          startIcon={<Cards size={20} />}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FormattedMessage id="GENERATE_CARDS.BUTTON.TEXT.GENERATE" />
        </Button>
      </Stack>
      <PreviewDialog open={open} setOpen={setOpen} canvasUrl={canvasUrl} />
      <Grid
        id="cards-container"
        container
        spacing={1}
        sx={{ justifyContent: "center" }}
        style={A4_PAPER_STYLES}
      >
        {magicItems.map((item, index) => (
          <Grid
            key={`${item.name}-${index}`}
            size={4}
            sx={{
              border: "1px solid #000",
              padding: 1.5,
              width: "63.5mm",
              alignSelf: "flex-start",
            }}
          >
            <ItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GenerateCardsPage;
