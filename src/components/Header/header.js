import React from "react";
import { View, Text, Button } from "react-native";
import Logo from '../../images/logo';
import theme from '../../styles/theme';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: false,
            customTitle: ''
        }
    }

    componentDidMount() {
        this.setState({
            sidebar: this.props.sidebar
        })
    }
    render() {
      const {sidebar, customTitle} = this.state;
      return (
        <React.Fragment>
          {sidebar ? 
            ( <View style={sidebarStyles}>
                <Logo sidebar/>
              </View>
            ) : (
              <View style={styles}>
                {
                  customTitle === '' ? (
                    <View>
                      <Logo />
                    </View>
                  ) : (
                    <Text>{customTitle}</Text>
                  )
                }
                
              </View>
            )} 
          </React.Fragment>
      );
    }
}

const styles = {
    flex: 1,
    top: 4,
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: theme.colors.yummyPink, 
    color: '#F80303'
}

const sidebarStyles = {
    flex: 1,
    top: 4,
    alignItems: 'center',
    backgroundColor: theme.colors.yellingRed, 
    color: '#F80303'
}