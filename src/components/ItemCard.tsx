import { Divider, Stack, Typography } from "@mui/material";
import type { MagicItem } from "../types";
import { FormattedMessage } from "react-intl";
import ItemTag from "./ItemTag";

const ItemCard = ({ item }: { item: MagicItem }) => {
  return (
    <Stack gap={1}>
      <Typography variant="itemName">{item.name}</Typography>
      {item.tags && (
        <Stack direction="row" gap={0.75} flexWrap="wrap">
          {item.tags.map((tag) => (
            <ItemTag key={tag} name={tag} />
          ))}
        </Stack>
      )}
      <Stack gap={0.25}>
        {item.usage && (
          <Typography variant="itemText" fontWeight={700}>
            <FormattedMessage
              id="ITEM_CARD.USAGE"
              values={{
                usage: <Typography variant="itemText">{item.usage}</Typography>,
              }}
            />
          </Typography>
        )}
        {item.bulk && (
          <Typography variant="itemText" fontWeight={700}>
            <FormattedMessage
              id="ITEM_CARD.BULK"
              values={{
                bulk: <Typography variant="itemText">{item.bulk}</Typography>,
              }}
            />
          </Typography>
        )}
        {item.activate && (
          <Typography variant="itemText" fontWeight={700}>
            <FormattedMessage
              id="ITEM_CARD.ACTIVATE"
              values={{
                activate: (
                  <Typography variant="itemText">{item.activate}</Typography>
                ),
              }}
            />
          </Typography>
        )}
        {item.trigger && (
          <Typography variant="itemText" fontWeight={700}>
            <FormattedMessage
              id="ITEM_CARD.TRIGGER"
              values={{
                trigger: (
                  <Typography variant="itemText">{item.trigger}</Typography>
                ),
              }}
            />
          </Typography>
        )}
      </Stack>
      <Divider sx={{ borderColor: "#000" }} />
      {item.description && (
        <Typography variant="itemText" sx={{ whiteSpace: "pre-wrap" }}>
          {item.description}
        </Typography>
      )}
    </Stack>
  );
};

export default ItemCard;
