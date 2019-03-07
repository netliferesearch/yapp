import React from "react";
import { View, Text, Button } from "react-native";
import Logo from '../../images/logo';
import theme from '../../styles/theme';


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
          <Logo></Logo>
        </View>
      );
    }
  }
const styles = {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: theme.colors.yummyPink, 
    color: '#F80303'
}
  