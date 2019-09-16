/* eslint-disable no-underscore-dangle */
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import propTypes from 'prop-types';

import apiToValueChecker from '../../utils/apiToValue';
import ProgramDay from './ProgramDay';
import styles from './styles';

export default class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: 'Thursday',
    };
    this.pressedTab = this.pressedTab.bind(this);
  }

  pressedTab(tab) {
    this.setState({
      selectedDay: tab,
    });
  }

  printTab(program) {
    const { selectedDay } = this.state;

    const tab = program && apiToValueChecker(program, 'postTitle', 'nb') ? program.postTitle.nb : null;
    const key = program && apiToValueChecker(program, '_key') ? program._key : null;
    const selected = selectedDay === tab;

    return tab !== 'Workshops' ? (
      <TouchableHighlight key={key} underlayColor="transparent" onPress={() => this.pressedTab(tab)}>
        <View style={[styles.programTab, selected ? styles.programTabSelected : styles.programTabDefault]}>
          <Text style={[styles.tabFont, selected ? styles.tabFontPropertiesSelected : styles.tabFontProperties]}>
            {tab.toUpperCase()}
          </Text>
          {selected && <View style={styles.programTabSelectedTabBottom} />}
        </View>
      </TouchableHighlight>
    ) : null;
  }

  printSelectedDay(program) {
    const { isFavorite, toggleFavorite } = this.props;
    const { selectedDay } = this.state;
    const tab = program && apiToValueChecker(program, 'postTitle', 'nb') ? program.postTitle.nb : null;
    const slots = program && apiToValueChecker(program, 'slot') ? program.slot : null;

    return tab === selectedDay ? (
      <ProgramDay
        key="selected-day"
        slots={slots}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        {...this.props}
      />
    ) : null;
  }

  render() {
    const { program } = this.props;
    const programs = apiToValueChecker(program[0], 'programArray') ? program[0].programArray : {};

    return (
      <View style={styles.programContainer}>
        <View style={styles.programTabs}>{Object.keys(programs).map(i => this.printTab(programs[i]))}</View>
        <View>{Object.keys(programs).map(i => this.printSelectedDay(programs[i]))}</View>
      </View>
    );
  }
}

Program.defaultProps = {
  program: [],
};

Program.propTypes = {
  program: propTypes.array,
  isFavorite: propTypes.func.isRequired,
  toggleFavorite: propTypes.func.isRequired,
};
