import { Button, Grid, Container, Stack } from "@mui/material";
import ItemCard from "../components/ItemCard";
import { getMagicItems } from "../localStorage";
import html2canvas from "html2canvas";
import { useState } from "react";
import PreviewDialog from "../components/PreviewDialog";
import type { MagicItem } from "../types";
import { useNavigate } from "react-router";
import { ArrowLeft } from "@phosphor-icons/react";

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
    <Container maxWidth="lg">
      <Stack direction="row" gap={2} sx={{ marginTop: 2, marginBottom: 2 }}>
        <Button
          onClick={() => navigate("/make-items")}
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<ArrowLeft size={20} />}
        >
          Back to Items
        </Button>
        <Button
          onClick={printCards}
          variant="contained"
          color="primary"
          size="large"
        >
          Print Cards
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
