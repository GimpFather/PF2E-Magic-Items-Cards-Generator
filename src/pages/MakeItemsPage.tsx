import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import NewItemForm from "../components/NewItemForm";
import { FormattedMessage } from "react-intl";
import { getMagicItems, saveMagicItems } from "../localStorage";
import { useState, useEffect, useCallback } from "react";
import type { MagicItem } from "../types";
import { items } from "../items";
import { useNavigate } from "react-router";
import { Eye, Plus } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const MakeItemsPage = () => {
  const navigate = useNavigate();
  const [magicItems, setMagicItems] = useState<MagicItem[]>(() => {
    const savedItems = getMagicItems();
    return savedItems.length === 0 ? items : savedItems;
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedItems = getMagicItems();
    if (savedItems.length === 0) {
      saveMagicItems(items);
    }
  }, []);

  const handleSaveMagicItem = useCallback(
    (magicItem: MagicItem, index: number | null) => {
      let newMagicItems: MagicItem[];

      if (index !== null && index >= 0 && index < magicItems.length) {
        newMagicItems = [...magicItems];
        newMagicItems[index] = magicItem;
      } else {
        newMagicItems = [...magicItems, magicItem];
      }

      setMagicItems(newMagicItems);
      saveMagicItems(newMagicItems);
      setEditingIndex(null);
    },
    [magicItems]
  );

  const handleAddNewItem = useCallback(() => {
    const newItem: MagicItem = {
      name: "",
    };
    setMagicItems((prev) => {
      const newMagicItems = [...prev, newItem];
      setEditingIndex(newMagicItems.length - 1);
      return newMagicItems;
    });
  }, []);

  const handleDeleteMagicItem = useCallback(
    (index: number) => {
      if (window.confirm("Are you sure you want to delete this item?")) {
        setMagicItems((prev) => {
          const newMagicItems = prev.filter((_, i) => i !== index);
          saveMagicItems(newMagicItems);
          if (editingIndex === index) {
            setEditingIndex(null);
          } else if (editingIndex !== null && editingIndex > index) {
            setEditingIndex(editingIndex - 1);
          }
          return newMagicItems;
        });
      }
    },
    [editingIndex]
  );

  return (
    <Container
      maxWidth="lg"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ willChange: "opacity" }}
    >
      <Divider sx={{ marginBottom: 2, borderColor: "#000" }} />
      <Stack gap={0.75} sx={{ marginTop: 2 }}>
        <Typography variant="h6" fontWeight={700}>
          <FormattedMessage id="MAKE_ITEMS.TITLE" />
        </Typography>
        <Typography variant="body1">
          <FormattedMessage id="MAKE_ITEMS.DESCRIPTION" />
        </Typography>
        <Typography variant="body1">
          <FormattedMessage id="MAKE_ITEMS.DESCRIPTION.LOCAL_STORAGE" />
        </Typography>
      </Stack>
      <Stack gap={2} sx={{ marginTop: 2 }}>
        {magicItems.map((item, index) => {
          const handleSave = (magicItem: MagicItem) =>
            handleSaveMagicItem(magicItem, index);
          const handleDelete = () => handleDeleteMagicItem(index);
          return (
            <NewItemForm
              key={item.name ? `${item.name}-${index}` : `item-${index}`}
              item={item}
              onSave={handleSave}
              onDelete={handleDelete}
              isNew={item.name === "" && index === editingIndex}
            />
          );
        })}
      </Stack>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ marginTop: 2, width: "100%", borderRadius: 0 }}
        onClick={handleAddNewItem}
        startIcon={<Plus size={20} />}
      >
        <FormattedMessage id="MAKE_ITEMS.BUTTON.TEXT.ADD" />
      </Button>
      <Button
        variant="outlined"
        size="large"
        sx={{ marginTop: 2, width: "100%", borderRadius: 0 }}
        onClick={() => navigate("/generate-cards")}
        startIcon={<Eye size={20} />}
      >
        <FormattedMessage id="MAKE_ITEMS.BUTTON.TEXT.PREVIEW" />
      </Button>
    </Container>
  );
};

export default MakeItemsPage;
