import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import ScreenView from 'components/screen_view';
import Divider from 'components/divider';
import Text from 'components/app_text';
import Header from 'components/header/header';
import Avatar from 'components/avatar';
import SubmitButton from 'components/submit_button';

const MainContainer = styled(ScreenView)`
  align-items: center;
`;

export default class Main extends Component {
  state = {};
  render() {
    const botImage = 'https://robohash.org/123125123.png';
    return (
      <MainContainer>
        <Header title="로그인" withBackButton withBottomBorder />
        <Text>가나다라마바사 앜칵두니메루</Text>
        <Divider isMarginVertical />
        <Text type="eng">ABCDEFGHIJKLMN OPQRSTU</Text>
        <Divider isMarginVertical />
        <Avatar size={80} uri={botImage} />
        <View width="100%">
          <SubmitButton text="전송" onPressButton={() => console.log('sibal')} />
        </View>
      </MainContainer>
    );
  }
}
