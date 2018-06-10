import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Header from 'components/header/header';
import Avatar from 'components/avatar';
import { Divider, ScreenView, SubmitButton } from 'components/commons';
import RadioGroup from 'components/radio_group/radio_group';
import MyCheckBox from 'components/my_check_box';
// import { Rating, AirbnbRating } from 'react-native-ratings';
import RatingStar from 'components/rating_star';

const MainContainer = styled(ScreenView)`
  align-items: center;
`;

export default class Main extends Component {
  state = {
    test: false,
  };

  onClick = () => {
    this.setState({ test: !this.state.test });
  };

  render() {
    const botImage = 'https://robohash.org/123125123.png';
    const genderList = [
      { id: 0, name: '남성' },
      { id: 1, name: '여성' },
      { id: 2, name: '비공개' },
    ];
    return (
      <MainContainer>
        <Header title="로그인" withBackButton withBottomBorder />
        <Text style={{ marginTop: 15 }}>가나다라마바사 앜칵두니메루</Text>
        <Text style={{ marginTop: 15 }} type="eng">
          ABCDEFGHIJKLMN OPQRSTU
        </Text>
        <Divider isMarginVertical />
        <Avatar style={{ marginTop: 15 }} size={80} uri={botImage} />
        <Avatar style={{ marginTop: 15 }} size={80} />
        <View style={{ marginTop: 15 }} width="100%">
          <SubmitButton text="전송" onPressButton={() => console.log('sibal')} />
        </View>
        <View style={{ alignItems: 'center', marginTop: 15 }} width="100%">
          <RadioGroup data={genderList} onSelectRadioButton={() => console.log('sibal')} />
        </View>
        <Divider isMarginVertical />
        <MyCheckBox text="sibaloma" onPressCheckBox={() => console.log('as')} />
        <RatingStar onFinishRating={() => {}} />
      </MainContainer>
    );
  }
}
