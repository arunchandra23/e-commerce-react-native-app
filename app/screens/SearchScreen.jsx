import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import AndroidSafeAreaView from "../utils/AndroidSafeAreaView";
import { ChevronBackIcon, SearchIcon } from "../components/Icons";
import { getProductByNameAction } from "../reduxStore/actions";
import ProductCard from "../components/ProductCard";
import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SearchScreen = ({ getProductByNameAction, searchResults }) => {
  const ref = useRef();
  const navigation=useNavigation()
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (searchTerm !== "") {
      const id = setTimeout(() => {
        getProductByNameAction(searchTerm);
      }, 1000);
      return () => {
        clearTimeout(id);
      };
    }
  }, [searchTerm]);

  const handleInputChange = (text) => {
    setSearchTerm(text);
  };
  const renderItems = (item) => {
    return <ProductCard productObj={item.item} />;
  };

  console.log();
  return (
    <AndroidSafeAreaView>
      <View style={styles.container}>
        <View style={styles.searchGroup}>
        <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              navigation.goBack();
            }}
          >
            <ChevronBackIcon color={Colors.mainColor} style={{paddingLeft:'2%'}} size={25} />
          </TouchableOpacity>
          <TextInput
            ref={ref}
            value={searchTerm}
            onChangeText={handleInputChange}
            autoFocus={true}
            style={styles.textInput}
          />
          <TouchableOpacity
            onPress={() => {
              ref.current.isFocused()
                ? Keyboard.dismiss()
                : ref.current.focus();
            }}
          >
            <SearchIcon color={Colors.mainColor} style={{paddingRight:'3%'}} size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.results}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: "30%" }}
            data={searchResults}
            numColumns={2}
            renderItem={renderItems}
          />
        </View>
      </View>
    </AndroidSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding:'2%',
    alignItems: "center",
  },
  searchGroup: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    margin: "2%",
  },
  textInput: {
    // borderColor: "blue",
    // borderWidth: 2,
    padding: "5%",
    width: "80%",
  },
  results: {
    // alignItems: "center",
    justifyContent: "center",
  },
});

const mapStatesToProps = (state) => {
  return { searchResults: state.searchResults };
};

export default connect(mapStatesToProps, { getProductByNameAction })(
  SearchScreen
);
