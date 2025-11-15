import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { XSquare } from "@phosphor-icons/react";
import { FormattedMessage } from "react-intl";

const PreviewDialog = ({
  open,
  setOpen,
  canvasUrl,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  canvasUrl: string | null;
}) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
      <DialogTitle>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="column" gap={0.25}>
            <Typography variant="h6">
              <FormattedMessage id="PREVIEW_DIALOG.TITLE" />
            </Typography>
            <Typography variant="body2">
              <FormattedMessage id="PREVIEW_DIALOG.DESCRIPTION" />
            </Typography>
          </Stack>
          <IconButton onClick={() => setOpen(false)}>
            <XSquare size={32} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          overflow: "auto",
        }}
      >
        {canvasUrl ? (
          <img
            src={canvasUrl}
            alt="Cards canvas"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <Typography variant="body2">
            <FormattedMessage id="PREVIEW_DIALOG.LOADING" />
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;
