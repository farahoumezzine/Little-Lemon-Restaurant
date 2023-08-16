import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";
const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

//The renderItem method calls a call-back method which renders another component called Item
//The Item component is rendered for every item in the array until it reaches the end.
const Item = ({ name, price }) => (
  <View style={styles.innerContainer}>
    <Text style={styles.itemText}>{name}</Text>
    <Text style={styles.itemText}>{price}</Text>
  </View>
);

const Separator = ({}) => <View style={styles.Separator}></View>;

const MenuItems2 = () => {
  //The renderItem takes an item from the data and renders it into the list.
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title} </Text>
  );

  return (
    <View style={{ flex: 0.75 }}>
      <SectionList
        keyExtractor={(item, index) => item + index} //It tells the list to use each id as React keys.
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textMenu: {
    color: "white",
    fontSize: 40,
    flexWrap: "wrap",
  },
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#495E57",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
  },
  Separator: {
    borderColor: "white",
    borderWidth: 0.5,
    opacity: 0.5,
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 25,
    textAlign: "center",
  },
  Separator: {
    borderColor: "white",
    borderWidth: 0.5,
    opacity: 0.5,
  },
});
export default MenuItems2;
