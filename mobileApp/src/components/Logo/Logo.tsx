import {LogoOverlap, LogoSvg} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import React from 'react';
import {Text, View, ViewStyle} from 'react-native';

interface LogoProps {
  style?: ViewStyle;
  hiddenSubTitle?: boolean;
}

const Logo = ({
  style = {},
  hiddenSubTitle = false,
}: LogoProps): React.ReactElement => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 220,
        ...style,
      }}>
      <View
        style={{
          position: 'relative',
          marginLeft: 46,
        }}>
        <LogoOverlap style={{position: 'absolute', top: '5%', left: '-1%'}} />
        <LogoSvg />
      </View>
      <View style={{}}>
        <Text
          style={{
            color: '#EEEEEE',
            fontSize: FontSize.xxxxxLarger,
            fontWeight: '900',
            letterSpacing: 3.2,
          }}>
          IPassword
        </Text>
        {!hiddenSubTitle && (
          <Text
            style={{
              color: '#00ADB5',
              fontSize: FontSize.xLarge,
              textAlign: 'center',
            }}>
            Bảo mật dễ dàng
          </Text>
        )}
      </View>
    </View>
  );
};

export default Logo;
