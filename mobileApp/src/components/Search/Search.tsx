import {SearchIcon} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import React, {useState} from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';

const Search = ({onSearch, placeholder, wrapperStyle = {}, value = ''}) => {
  return (
    <SafeAreaView>
      <View
        style={[
          {
            position: 'relative',
            backgroundColor: Colors.subPrimary,
            paddingLeft: 40,
            width: '94%',
            marginHorizontal: '3%',
            borderRadius: 10,
            marginTop: 14,
          },
          wrapperStyle,
        ]}>
        <View
          style={{
            position: 'absolute',
            top: 2,
            left: 0,
            zIndex: 10,
          }}>
          <SearchIcon />
        </View>
        <TextInput
          style={{color: Colors.text, fontSize: FontSize.large}}
          placeholderTextColor={Colors.text}
          placeholder={placeholder || 'Tìm kiếm...'}
          clearButtonMode="always"
          value={value}
          onChangeText={onSearch}
          onSubmitEditing={onSearch}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
