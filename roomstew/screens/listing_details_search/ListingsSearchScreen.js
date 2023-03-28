import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import AppForm from "../../components/forms/AppForm";
import ListItemPickerFormField from "../../components/forms/ListItemPickerFormField";
import TextInputFormField from "../../components/forms/TextInputFormField";
import DatePickerFormFieldField from "../../components/forms/DatePickerFormField";
import FormSubmitButton from "../../components/forms/FormSubmitButton";
import { getFormatedDate } from "react-native-modern-datepicker";
import moment from "moment";

import Icon from "../../components/Icon";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import ListItemSeparator from "../../components/ListItemSeparator";

//item pickers for min rooms
const minRoomPickerItems = [{ label: "Any", value: "", subTitle: "Any" }];
for (let i = 1; i <= 12; i++) {
  const label = `${i} room${i > 1 ? "s" : ""} available`;
  const value = i;
  const subTitle = label;
  minRoomPickerItems.push({ label, value, subTitle });
}

const bathroomPickerItems = [{ label: "Any", value: -1, subTitle: "Any" }];
for (let i = 1; i <= 12; i++) {
  const label = `${i} Bathroom${i > 1 ? "s" : ""}`;
  const value = i;
  const subTitle = label;
  bathroomPickerItems.push({ label, value, subTitle });
}

const trueOrFalsePickerItems = [
  { label: "Any", value: -1, subTitle: "Any" },
  { label: "Yes", value: 1, subTitle: "Yes" },
  { label: "No", value: 0, subTitle: "No" },
];

const buildingTypePickerItems = [
  { label: "Any", value: -1, subTitle: "Any" },
  { label: "Flat", value: 0, subTitle: "Flat" },
  { label: "House", value: 1, subTitle: "House" },
  { label: "Other", value: 2, subTitle: "Other" },
];

const validationSchema = Yup.object().shape({
  cityToSearch: Yup.string()
    .min(2, "City name should be at least 2 characters long")
    .max(50, "City name should be at most 50 characters long"),
  minRoomsAvailable: Yup.number(),
  minRent: Yup.number().nullable(),
  maxRent: Yup.number()
    .nullable()
    .test(
      "maxRent",
      "Max rent should be greater than or equal to min rent",
      function (value) {
        const { minRent } = this.parent;
        if (value && minRent && value < minRent) {
          return false;
        }
        return true;
      }
    ),
});

const ListingsSearchScreen = ({ navigation }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("No end date");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <AppText style={{ fontWeight: "bold", fontSize: 25 }}>Search</AppText>
      </View>

      <View style={{ flex: 1 }}>
        <AppForm
          initialValues={{
            cityToSearch: "",
            postcodeToSearch: "",
            dateAvailableBy: new Date(),
            minRoomsAvailable: "",
            minRent: "",
            maxRent: "",
            maxDeposit: "",
            isRoomFurnished: -1,
            isRoomEnsuite: -1,
            isFurnished: -1,
            hasLivingRoom: -1,
            bathroomCount: -1,
            hasHmo: -1,
            billsIncluded: -1,
            internetIncluded: -1,
            buildingType: -1,
            hasGarden: -1,
            hasParking: -1,
          }}
          onSubmit={(values) => {
            //TO DO: fix serializable log error
            // values.dateAvailableBy = moment(values.dateAvailableBy).format(
            //   "YYYY/MM/DD"
            // );
            navigation.navigate("ListingsResultsScreen", { values });
            console.log("Values on button press in search screen", values);
          }}
          validationSchema={validationSchema}
        >
          <View style={{ padding: 20 }}>
            <TextInputFormField
              style={{ width: "100%" }}
              autoCapitalize="none"
              autocorrect={false}
              keyboardType="default"
              title="City"
              name="cityToSearch"
              placeholder="e.g. Glasgow (optional)"
              textContentType="addressCity"
            />

            <TextInputFormField
              style={{ width: "80%" }}
              autoCapitalize="none"
              autocorrect={false}
              keyboardType="default"
              title="Postcode"
              name="postodeToSearch"
              placeholder="e.g. SW1 2AA (optional)"
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInputFormField
                width="45%"
                autoCapitalize="none"
                autocorrect={false}
                keyboardType="numeric"
                title="Min rent £ /month"
                name="minRent"
                placeholder="500 (optional)"
                textContentType="none"
              />

              <TextInputFormField
                width="45%"
                autoCapitalize="none"
                autocorrect={false}
                keyboardType="numeric"
                title="Max rent £ /month"
                name="maxRent"
                placeholder="1000 (optional)"
                textContentType="none"
              />
            </View>
            <TextInputFormField
              width="45%"
              autoCapitalize="none"
              autocorrect={false}
              keyboardType="numeric"
              title="Max deposit"
              name="maxDeposit"
              placeholder="500 (optional)"
              textContentType="none"
            />
          </View>

          <ListItemSeparator />
          <AppText
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 10,
              paddingLeft: 10,
            }}
          >
            Room Filters
          </AppText>

          <DatePickerFormFieldField
            name="dateAvailableBy"
            title="Available by"
            IconComponent={
              <Icon name="calendar" backgroundColor={colors.primary} />
            }
            //max should be
            minDate={getFormatedDate(new Date(), "YYYY-MM-DD")}
            maxDate={
              endDate === "No end date"
                ? getFormatedDate(
                    new Date(
                      startDate.getFullYear(),
                      startDate.getMonth() + 6,
                      startDate.getDate()
                    ),
                    "YYYY-MM-DD"
                  )
                : getFormatedDate(endDate, "YYYY-MM-DD")
            }
            onSelectItem={(value) => {
              const newStartDate = new Date(value);
              newStartDate.setMonth(newStartDate.getMonth());
              setStartDate(newStartDate);
            }}
          />

          <ListItemSeparator />

          <ListItemPickerFormField
            name="minRoomsAvailable"
            title="Min available rooms"
            items={minRoomPickerItems}
            IconComponent={<Icon name="bed" backgroundColor={colors.primary} />}
          />
          <ListItemSeparator />

          <ListItemPickerFormField
            name="isRoomFurnished"
            title="Room furnished"
            items={trueOrFalsePickerItems}
            IconComponent={
              <Icon name="table-chair" backgroundColor={colors.primary} />
            }
          />
          <ListItemSeparator />

          <ListItemPickerFormField
            name="isRoomEnsuite"
            title="En-suite"
            items={trueOrFalsePickerItems}
            IconComponent={
              <Icon name="toilet" backgroundColor={colors.primary} />
            }
          />

          <ListItemSeparator />
          <AppText
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 10,
              paddingLeft: 10,
            }}
          >
            Listing Filters
          </AppText>

          <ListItemPickerFormField
            name="isFurnished"
            title="Property furnished"
            items={trueOrFalsePickerItems}
            IconComponent={
              <Icon name="table-chair" backgroundColor={colors.primary} />
            }
          />
          <ListItemSeparator />

          <ListItemPickerFormField
            name="hasLivingRoom"
            title="Living room"
            items={trueOrFalsePickerItems}
            IconComponent={
              <Icon name="sofa" backgroundColor={colors.primary} />
            }
          />
          <ListItemSeparator />

          <ListItemPickerFormField
            name="bathroomCount"
            title="Bathrooms"
            items={bathroomPickerItems}
            IconComponent={
              <Icon name="toilet" backgroundColor={colors.primary} />
            }
          />

          <ListItemSeparator />

          <ListItemPickerFormField
            name="hasHmo"
            title="HMO"
            items={trueOrFalsePickerItems}
            IconComponent={
              <Icon
                name="account-multiple-check"
                backgroundColor={colors.primary}
              />
            }
          />
          <ListItemSeparator />

          <ListItemPickerFormField
            name="billsIncluded"
            title="Bills included"
            items={trueOrFalsePickerItems}
            IconComponent={
              <Icon
                name="home-lightning-bolt"
                backgroundColor={colors.primary}
              />
            }
          />
          <ListItemSeparator />

          <ListItemPickerFormField
            name="internetIncluded"
            title="Internet included"
            items={trueOrFalsePickerItems}
            IconComponent={
              <Icon name="wifi" backgroundColor={colors.primary} />
            }
          />

          <ListItemSeparator />

          <ListItemPickerFormField
            name="buildingType"
            title="Building type"
            items={buildingTypePickerItems}
            IconComponent={
              <Icon name="office-building" backgroundColor={colors.primary} />
            }
          />

          <View style={{ flexGrow: 1 }}></View>

          <View style={{ padding: 10 }}>
            <FormSubmitButton title="Search" />
          </View>
        </AppForm>
      </View>
    </ScrollView>
  );
};

export default ListingsSearchScreen;

const styles = StyleSheet.create({});
