import React from "react";
import { View, Text } from "react-native";
import ListItem from "./ListItem";
import ListItemSeparator from "./ListItemSeparator";
import Icon from "../components/Icon";
import AppText from "./AppText";

function ListItemList({
  objFromDB,
  localObj,
  items,
  sliceAtIndex,
  sliceToIndex,
}) {
  let itemList = items;
  if (sliceAtIndex !== undefined && sliceToIndex !== undefined) {
    itemList = itemList.slice(sliceAtIndex, sliceToIndex);
  }

  return (
    <>
      {itemList.map((item) => (
        <View key={item.title}>
          {objFromDB[item.DBFieldName] ? (
            <>
              <ListItem
                title={item.title}
                subTitle={objFromDB[item.DBFieldName]}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
              <ListItemSeparator />
            </>
          ) : (
            <>
              {localObj && localObj[item.DBFieldName] && (
                <>
                  <ListItem
                    title={item.title}
                    subTitle={localObj[item.DBFieldName]}
                    IconComponent={
                      <Icon
                        name={item.icon.name}
                        backgroundColor={item.icon.backgroundColor}
                      />
                    }
                  />
                  <ListItemSeparator />
                </>
              )}
            </>
          )}
        </View>
      ))}
    </>
  );
}

export default ListItemList;
