import { StyleSheet } from 'react-native';
import { purple } from '../colors';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: purple
  },
  whiteText: {
    color: 'white'
  },
  boldText: {
    fontWeight: 'bold'
  },
  displayFlex: {
    display: 'flex'
  },
  flexDirectionRow: {
    flexDirection: 'row'
  },
  flexDirectionColumn: {
    flexDirection: 'column'
  },
  flexDirectionRowReverse: {
    flexDirection: 'row-reverse'
  },
  flexDirectionColumnReverse: {
    flexDirection: 'column-reverse'
  },
  flexWrapWrap: {
    flexWrap: 'wrap'
  },
  flexWrapNoWrap: {
    flexWrap: 'nowrap'
  },
  justifyContentFlexStart: {
    justifyContent: 'flex-start'
  },
  justifyContentFlexEnd: {
    justifyContent: 'flex-end'
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});