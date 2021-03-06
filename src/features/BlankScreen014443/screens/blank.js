import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_3: true, DateTimePicker_4: new Date("") }

  render = () => (
    <View>
      <Button
        title="Press me!"
        style={styles.Button_2}
        onPress={() => alert("Pressed!")}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_3}
        value={this.state.Switch_3}
        onValueChange={nextChecked => this.setState({ Switch_3: nextChecked })}
      />
      <DateTimePicker
        showIcon={false}
        style={styles.DateTimePicker_4}
        date={this.state.DateTimePicker_4}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_4: selectedDate })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Button_2: { width: 100 },
  Switch_3: { width: 100, alignSelf: "center" },
  DateTimePicker_4: { width: 100, alignSelf: "flex-end" },
  View_1: {},
  Button_2: { width: 100, height: 29, paddingTop: 10, borderWidth: 5 },
  Switch_3: { width: 100, height: 28, alignSelf: "center", borderWidth: 3 },
  DateTimePicker_4: { width: 100, alignSelf: "flex-end", borderWidth: 2 },
  View_1: {},
  Button_2: { width: 100, height: 29, paddingTop: 10, borderWidth: 5 },
  Switch_3: { width: 100, height: 28, alignSelf: "center", borderWidth: 3 },
  DateTimePicker_4: {
    width: 100,
    alignSelf: "flex-end",
    borderWidth: 0,
    borderBottomWidth: 2
  },

  View_1: {},
  Button_2: { width: 100, height: 29, paddingTop: 10, borderWidth: 5 },
  Switch_3: { width: 100, height: 28, alignSelf: "center", borderWidth: 3 },
  DateTimePicker_4: {
    width: 100,
    alignSelf: "flex-end",
    borderWidth: 2,
    borderBottomWidth: 0
  },

  View_1: {},
  Button_2: { width: 100, height: 29, paddingTop: 10, borderWidth: 5 },
  Switch_3: { width: 100, height: 28, alignSelf: "center", borderWidth: 3 },
  DateTimePicker_4: { width: 100, alignSelf: "flex-end", borderWidth: 3 },
  View_1: {},
  Button_2: { width: 100, height: 29, paddingTop: 10, borderWidth: 5 },
  Switch_3: {
    width: 100,
    height: 28,
    alignSelf: "center",
    borderWidth: 0,
    borderLeftWidth: 8
  },

  DateTimePicker_4: { width: 100, alignSelf: "flex-end", borderWidth: 3 },
  View_1: {},
  Button_2: { width: 100, height: 29, paddingTop: 10, borderWidth: 5 },
  Switch_3: {
    width: 100,
    height: 28,
    alignSelf: "center",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },

  DateTimePicker_4: { width: 100, alignSelf: "flex-end", borderWidth: 3 },
  View_1: {},
  Button_2: { width: 100, height: 29, paddingTop: 10, borderWidth: 5 },
  Switch_3: {
    width: 100,
    height: 28,
    alignSelf: "center",
    borderWidth: 0,
    borderLeftWidth: 2,
    borderRightWidth: 3,
    borderTopWidth: 4,
    borderBottomWidth: 3
  },

  DateTimePicker_4: { width: 100, alignSelf: "flex-end", borderWidth: 3 },
  View_1: {},
  Button_2: { width: 100, height: 29, paddingTop: 10, borderWidth: 5 },
  Switch_3: {
    width: 100,
    height: 28,
    alignSelf: "center",
    borderWidth: 4,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  DateTimePicker_4: { width: 100, alignSelf: "flex-end", borderWidth: 3 },
  View_1: {},
  Button_2: { width: 100, height: 29, paddingTop: 10, borderWidth: 5 },
  Switch_3: { width: 100, height: 28, alignSelf: "center", borderWidth: 4 },
  DateTimePicker_4: {
    width: 100,
    alignSelf: "flex-end",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },

  View_1: {},
  Button_2: {
    width: 100,
    height: 29,
    paddingTop: 10,
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },

  Switch_3: {
    width: 100,
    height: 28,
    alignSelf: "center",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },

  DateTimePicker_4: {
    width: 100,
    alignSelf: "flex-end",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },

  View_1: {},
  Button_2: {
    width: 100,
    height: 29,
    paddingTop: 10,
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  Switch_3: {
    width: 100,
    height: 28,
    alignSelf: "center",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  DateTimePicker_4: {
    width: 100,
    alignSelf: "flex-end",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  View_1: {},
  Button_2: {
    width: 100,
    height: 29,
    paddingTop: 10,
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Switch_3: {
    width: 100,
    height: 28,
    alignSelf: "center",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },
  DateTimePicker_4: {
    width: 100,
    alignSelf: "flex-end",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  }
})
