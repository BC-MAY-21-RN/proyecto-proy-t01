import React, {useState} from 'react';
import {FlatList} from 'react-native';
import colors from '../../constants/colors';
import Sections from '../../constants/sections';
import {TextSection, SectionContainer, SectionItem} from './styledComponents';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <SectionItem onPress={onPress} style={backgroundColor}>
    <TextSection style={textColor}>{item.title}</TextSection>
  </SectionItem>
);

const SectionList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId ? colors.red : colors.white;
    const color = item.id === selectedId ? colors.white : colors.dark;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SectionContainer>
      <FlatList
        data={Sections}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        horizontal
      />
    </SectionContainer>
  );
};

export default SectionList;
