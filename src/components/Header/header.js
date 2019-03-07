import React from "react";
import { View, Text, Button } from "react-native";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    componentDidMount() {
        this.setState({
            title: this.props.title
        })
    }
    render() {
      const title = this.state.title;
      return (
        <View style={styles}>
          <Text style={styles.netlifeY}>{title}</Text>
        </View>
      );
    }
  }
const styles = {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#F3C1C1', 
    color: '#F80303'
}
  