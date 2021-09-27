import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (e) {
    console.log(e);
  }
};

const storeNumber = async (name ,value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(name, jsonValue)
  } catch (e) {
   
  }
}

const getData = async (name) => {
  try {
    const value = await AsyncStorage.getItem(name);
    return value;
  } catch (e) {
    console.log(e);
  }
};

const removeData = async (name) => {
  try {
    await AsyncStorage.removeItem(name);
  } catch (error) {
    console.log(error);
  }
};

export { storeData, getData, removeData, storeNumber };
