import * as React from 'react';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { randomNumbersList } from '../../../../../../../config/utils/randomNumbers';
import { squareStyles } from '../../../../../../../assets/styles/components/square';
import { styles } from '../../../../../../../assets/styles/global/index';

export class AlgorithmsContainer extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      list: [],
      listLength: 10,
    }
  }



  componentDidMount() {
    this.setList();
  }

  componentWillUnmount() {
    console.log('AlgorithmsContainer: componentWillUnmount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('AlgorithmsContainer: componentDidUpdate', { prevState });
    if (prevState.listLength !== this.state.listLength) {
      this.setList();
    }
  }


  pressButton(index: number, value: number) {
    console.log('AlgorithmsContainer: pressButton', index, 'Value', value);
  }

  setListLength(event: any) {

    console.log('NATIVE EVENTL', event);
    // const listLength = Math.ceil(parseInt(length));
    // console.log('AlgorithmsContainer: setListLength', listLength);
    
    // if(listLength > 30) return;

    // this.setState({ listLength: listLength });
  }

  setList() {
    const list = randomNumbersList(this.state.listLength);
    this.setState({ list });
  }


  render() {
    return (
      <>
        <View style={{
        }}>
        </View>
        <Text>
          ALGORITHMS CONTAINER
        </Text>

        <TextInput keyboardType='numeric' onChange={({nativeEvent}) => this.setListLength(nativeEvent)} onKeyPress={({ target, nativeEvent, preventDefault }) => {

        } } />
        <ScrollView>

          <View style={[
            styles.centerAll,
            styles.displayFlex,
            styles.flexDirectionRow,
            styles.flexWrapWrap,
            {
              backgroundColor: 'red',

            }]}>
            {
              this.state.list.map((item: any, index: number) => {
                return (
                  <TouchableOpacity onPress={() => this.pressButton(index, item)}>
                    <View style={[
                      styles.background,
                      squareStyles.square64x64,
                      styles.displayFlex,
                      styles.centerAll,
                    ]}
                    >
                      <Text style={[
                        styles.whiteText,
                        styles.boldText,
                        styles.displayFlex,
                      ]}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </ScrollView>
      </>
    );
  }
}