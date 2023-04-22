import {
  Calendar,
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
} from "react-native-calendars";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

interface State {
  items?: AgendaSchedule;
}

export default class SimpleAgenda extends React.Component {
  state: State = {
    items: undefined,
  };

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected={"2017-05-16"}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        showClosingKnob={true}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
        // showOnlySelectedDayItems
        // reservationsKeyExtractor={this.reservationsKeyExtractor}
      />
      // <View style={{ paddingTop: 50, flex: 1 }}>
      // <Calendar
      //   // Initially visible month. Default = Date()
      //   current={new Date().toLocaleString()}
      //   // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      //   minDate={'2012-05-10'}
      //   // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      //   maxDate={'2012-05-30'}
      //   // Handler which gets executed on day press. Default = undefined
      //   onDayPress={day => {
      //     console.log('selected day', day);
      //   }}
      //   // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      //   monthFormat={'yyyy MM'}
      //   // Handler which gets executed when visible month changes in calendar. Default = undefined
      //   onMonthChange={month => {
      //     console.log('month changed', month);
      //   }}
      //   // Hide month navigation arrows. Default = false
      //   hideArrows={true}
      //   // Do not show days of other months in month page. Default = false
      //   hideExtraDays={true}
      //   // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
      //   // day from another month that is visible in calendar page. Default = false
      //   disableMonthChange={true}
      //   // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
      //   firstDay={1}
      // />
      // </View>
    );
  }

  loadItems = (day: DateData) => {
    const items = this.state.items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      this.setState({
        items: newItems,
      });
    }, 1000);
  };

  renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <TouchableOpacity
        style={[styles.item, { height: reservation.height }]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
