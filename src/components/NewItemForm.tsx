import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Typography,
  Button,
  TextField,
  Box,
  Snackbar,
  Alert,
  IconButton,
  Tooltip,
} from "@mui/material";
import { CaretUp, Trash } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import type { MagicItem } from "../types";
import { FormattedMessage } from "react-intl";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface NewItemFormProps {
  item: MagicItem;
  onSave: (magicItem: MagicItem) => void;
  onDelete?: () => void;
  isNew?: boolean;
}

const NewItemForm = ({
  item,
  onSave,
  onDelete,
  isNew = false,
}: NewItemFormProps) => {
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setShowCopyNotification(true);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MagicItem & { tagsString?: string }>({
    defaultValues: {
      name: item.name || "",
      tags: item.tags || [],
      usage: item.usage || "",
      bulk: item.bulk || "",
      activate: item.activate || "",
      trigger: item.trigger || "",
      description: item.description || "",
      tagsString: item.tags?.join(", ") || "",
    },
  });

  const onSubmit = (data: MagicItem & { tagsString?: string }) => {
    const tagsArray = data.tagsString
      ? data.tagsString
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
      : [];

    const magicItem: MagicItem = {
      name: data.name.trim(),
      tags: tagsArray.length > 0 ? tagsArray : undefined,
      usage: data.usage?.trim() || undefined,
      bulk: data.bulk?.trim() || undefined,
      activate: data.activate?.trim() || undefined,
      trigger: data.trigger?.trim() || undefined,
      description: data.description?.trim() || undefined,
    };

    onSave(magicItem);
    setShowSaveNotification(true);
  };

  return (
    <>
      <Accordion sx={{ border: "3px solid #000", borderRadius: 0 }}>
        <AccordionSummary expandIcon={<CaretUp size={32} color="#000" />}>
          <Typography variant="h5">
            {isNew ? "New Item" : item.name || "Unnamed Item"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              gap={2}
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              sx={{
                padding: 2,
              }}
            >
              <TextField
                label="Name"
                {...register("name", {
                  required: "Name is required",
                  validate: (value) =>
                    value.trim().length > 0 || "Name cannot be empty",
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
              />
              <TextField
                label="Tags (comma separated)"
                {...register("tagsString")}
                error={!!errors.tagsString}
                helperText={
                  errors.tagsString?.message ||
                  "Separate multiple tags with commas"
                }
                fullWidth
              />
              <TextField
                label="Usage"
                {...register("usage")}
                error={!!errors.usage}
                helperText={errors.usage?.message}
                fullWidth
              />
              <TextField
                label="Bulk"
                {...register("bulk")}
                error={!!errors.bulk}
                helperText={errors.bulk?.message}
                fullWidth
              />
              <Stack direction="row" gap={2}>
                <TextField
                  label="Activate"
                  {...register("activate")}
                  error={!!errors.activate}
                  helperText={errors.activate?.message}
                  sx={{ flex: 1 }}
                />
                <Stack direction="row" gap={0.5}>
                  <Tooltip
                    title={
                      <FormattedMessage id="NEW_ITEM_FORM.TOOLTIP.COPY.STAR" />
                    }
                    placement="top"
                    arrow
                  >
                    <IconButton
                      size="small"
                      onClick={() => copyToClipboard("◆")}
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: 0,
                      }}
                    >
                      ◆
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title={
                      <FormattedMessage id="NEW_ITEM_FORM.TOOLTIP.COPY.DOUBLE_STAR" />
                    }
                    placement="top"
                    arrow
                  >
                    <IconButton
                      size="small"
                      onClick={() => copyToClipboard("◆◆")}
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: 0,
                      }}
                    >
                      ◆◆
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title={
                      <FormattedMessage id="NEW_ITEM_FORM.TOOLTIP.COPY.TRIPLE_STAR" />
                    }
                    placement="top"
                    arrow
                  >
                    <IconButton
                      size="small"
                      onClick={() => copyToClipboard("◆◆◆")}
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: 0,
                      }}
                    >
                      ◆◆◆
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title={
                      <FormattedMessage id="NEW_ITEM_FORM.TOOLTIP.COPY.DOUBLE_DASH" />
                    }
                    placement="top"
                    arrow
                  >
                    <IconButton
                      size="small"
                      onClick={() => copyToClipboard("◇")}
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: 0,
                      }}
                    >
                      ◇
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title={
                      <FormattedMessage id="NEW_ITEM_FORM.TOOLTIP.COPY.LEFT_ARROW" />
                    }
                    placement="top"
                    arrow
                  >
                    <IconButton
                      size="small"
                      onClick={() => copyToClipboard("⮌")}
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: 0,
                      }}
                    >
                      ⮌
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>
              <TextField
                label="Trigger"
                {...register("trigger")}
                error={!!errors.trigger}
                helperText={errors.trigger?.message}
                fullWidth
              />
              <TextField
                label="Description"
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
                multiline
                minRows={4}
                maxRows={10}
                fullWidth
              />
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: 0 }}
                >
                  <FormattedMessage id="NEW_ITEM_FORM.BUTTON.SAVE" />
                </Button>
                {onDelete && !isNew && (
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={onDelete}
                    startIcon={<Trash size={20} />}
                    sx={{ borderRadius: 0 }}
                  >
                    <FormattedMessage id="NEW_ITEM_FORM.BUTTON.DELETE" />
                  </Button>
                )}
              </Box>
            </Stack>
          </form>
        </AccordionDetails>
      </Accordion>
      <Snackbar
        open={showSaveNotification}
        autoHideDuration={3000}
        onClose={() => setShowSaveNotification(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSaveNotification(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          <FormattedMessage id="NEW_ITEM_FORM.NOTIFICATION.SAVED" />
        </Alert>
      </Snackbar>
      <Snackbar
        open={showCopyNotification}
        autoHideDuration={2000}
        onClose={() => setShowCopyNotification(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowCopyNotification(false)}
          severity="info"
          sx={{ width: "100%" }}
        >
          Skopiowano: {copiedText}
        </Alert>
      </Snackbar>
    </>
  );
};

export default NewItemForm;
