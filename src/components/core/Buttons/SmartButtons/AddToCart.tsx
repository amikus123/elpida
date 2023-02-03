import React, { useContext } from "react";
import { useHistory } from "react-router";
import { PUBLIC_ROUTES } from "../../../../constans/routes";
import { DataContext, ItemProperties } from "../../../../context/DataContext";
import { ElementContext } from "../../../../context/ElementContext";
import PlainButton from "../PlainButton";

interface AddToCartProps {
  item: ItemProperties;
  link: string;
  text?: string;
  showCount?: boolean;
  count?: number;
  checkout?: boolean;
}
const AddToCart = ({
  item,
  link,
  text = "Add to cart",
  count = 1,
  checkout = false,
  showCount = false,
}: AddToCartProps) => {
  const { addToCart } = useContext(DataContext);
  const { updateSnackbar } = useContext(ElementContext);

  const history = useHistory();

  return (
    <PlainButton
      onClick={() => {
        addToCart(item, link, count);
        // move to cheocut page
        if (checkout) {
          history.replace(PUBLIC_ROUTES.CHECKOUT);
        } else {
          updateSnackbar(`Added "${item.title}" to cart`);
        }
      }}
      text={`${text}${showCount ? ` (${count})` : ""}`}
    ></PlainButton>
  );
};

export default AddToCart;
