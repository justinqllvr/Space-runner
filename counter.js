import React from "react"
import { TextInput, View, Text } from "react-native";

class Counter extends React.Component {
  state = {
    count: 0,
  };


  componentDidMount() {
    this.interval = setInterval(this.tick, 500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}
export default Counter