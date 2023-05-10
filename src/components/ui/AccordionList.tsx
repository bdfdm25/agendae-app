import { ListItem } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet } from "react-native";

interface IAccordionListProps {
  title: string;
  itemList: string[];
  onSelect(item: string): void;
}

function AccordionList({ title, itemList, onSelect }: IAccordionListProps) {
  const [accordionState, setAccordionState] = useState(false);
  const [accordionValue, setAccordionValue] = useState("--");

  return (
    <>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title>
              {title} {accordionValue}
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={accordionState}
        onPress={() => {
          setAccordionState(!accordionState);
        }}
        containerStyle={
          accordionState
            ? [styles.inputInnerContainer, styles.accordionContainer]
            : styles.inputInnerContainer
        }
      >
        {itemList.map((item, i) => (
          <ListItem
            key={i}
            onPress={() => {
              setAccordionValue(item);
              setAccordionState(!accordionState);
              onSelect(item);
            }}
            style={({ pressed }) => (pressed ? styles.pressed : null)}
          >
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItem.Accordion>
    </>
  );
}

export default AccordionList;

const styles = StyleSheet.create({
  inputInnerContainer: {
    padding: 10,
    borderRadius: 6,
    elevation: 2,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  accordionContainer: {
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },
  pressed: {
    opacity: 0.35,
  },
});
