import { Button, Grid } from "@mui/material";
import ItemCard from "./components/ItemCard";
import { items } from "./items";
import html2canvas from "html2canvas";
import { useState } from "react";
import PreviewDialog from "./components/PreviewDialog";

function App() {
  const [open, setOpen] = useState(false);
  const [canvasUrl, setCanvasUrl] = useState<string | null>(null);

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
    <>
      <Button onClick={printCards}>Print Cards</Button>
      <PreviewDialog open={open} setOpen={setOpen} canvasUrl={canvasUrl} />
      <Grid
        id="cards-container"
        container
        spacing={1}
        sx={{ justifyContent: "center" }}
        style={A4_PAPER_STYLES}
      >
        {items.map((item, index) => (
          <Grid
            key={index}
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
    </>
  );
}

export default App;
