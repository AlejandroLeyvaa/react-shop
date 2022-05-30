import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { ALGORITHMS_VIEW } from '../../../../../../../config/navigation/routes/paths';
import { buttonStyles } from '../../../../../../../assets/styles/components/button';
import { height, width } from '../../../../../../../config/utils/deviceDimension';

export class LoginContainer extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  navigate() {
    this.props.navigation.navigate(ALGORITHMS_VIEW);
  }

  render() {
    return (
      <>
        <View style={{
          backgroundColor: 'red',
          height: height,
          width: width
        }}>
          <Text>
            LoginContainer
          </Text>

          <View style={[
            buttonStyles.mediumButton,
          ]}>
            <Button title="Algorithms" onPress={() => this.navigate()} />
          </View>
        </View>
      </>
    );
  }
}