import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button, TouchableHighlight, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Header from 'components/header/header';
import { Text, Divider, ScreenView, SubmitButton } from 'components/commons';
import { routes } from 'constants';
import Avatar from 'components/avatar';
import RadioGroup from 'components/radio_group/radio_group';
import MyCheckBox from 'components/my_check_box';
import RatingStar from 'components/rating_star';
import MyModal from 'components/my_modal';

const MainContainer = styled(ScreenView)`
  align-items: center;
`;

export default class Main extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const botImage = 'https://robohash.org/123125123.png';
    const genderList = [
      { id: 0, name: '남성' },
      { id: 1, name: '여성' },
      { id: 2, name: '비공개' },
    ];
    return (
      <MainContainer>
        <MyModal
          isShowModal={this.state.modalVisible}
          toggleModal={val => this.setModalVisible(val)}
          navigation={this.props.navigation}
        />
        <Header title="로그인" withBackButton withBottomBorder />
        <ScrollView>
          <View style={{ marginTop: 15, alignItems: 'center', width: '100%' }}>
            <Text style={{ marginTop: 15 }}>가나다라마바사 앜칵두니메루</Text>
            <Text style={{ marginTop: 15 }} type="eng">
              ABCDEFGHIJKLMN OPQRSTU
            </Text>
            <Divider isMarginVertical />
            <Avatar size={80} uri={botImage} />
            <Divider isMarginVertical />
            <Avatar size={80} />
            <View style={{ marginTop: 15, width: '100%' }}>
              <SubmitButton text="전송" onPressButton={() => console.log('sibal')} />
            </View>
            <View style={{ alignItems: 'center', marginTop: 15, width: '100%' }}>
              <RadioGroup data={genderList} onSelectRadioButton={() => console.log('sibal')} />
            </View>
            <Divider isMarginVertical />
            <MyCheckBox text="sibaloma" onPressCheckBox={() => console.log('as')} />
            <Divider isMarginVertical />
            <RatingStar onFinishRating={() => {}} />
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              <Text>Show Modal</Text>
            </TouchableHighlight>
            <Button title="Form" onPress={() => this.props.navigation.navigate(routes.second)} />
          </View>
        </ScrollView>
      </MainContainer>
    );
  }
}

Main.defaultProps = {};

Main.propTypes = {
  navigation: PropTypes.object.isRequired,
};
