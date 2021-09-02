import React, {useState} from 'react';
import {FlatList} from 'react-native';
import colors from '../../constants/colors';
import Sections from '../../constants/sections';
import {SectionItem, TextSection} from './styledComponents';
import {PetList} from '../../components';
import {pets} from '../../constants/pets.json';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <SectionItem onPress={onPress} style={backgroundColor}>
    <TextSection style={textColor}>{item.title}</TextSection>
  </SectionItem>
);

const SectionList = () => {
  const small = pets.filter(pet => pet.size === 'Chico');
  const medium = pets.filter(pet => pet.size === 'Mediano');
  const big = pets.filter(pet => pet.size === 'Grande');
  const [dogSize, setDogSize] = useState(medium);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId ? colors.red : colors.light_pink;
    const color = item.id === selectedId ? colors.white : colors.dark;

    function Sizing() {
      const size = item.id;
      if (size === '1') {
        return small;
      }
      if (size === '2') {
        return medium;
      }
      if (size === '3') {
        return big;
      }
    }

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setDogSize(Sizing);
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <>
      <FlatList
        data={Sections}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        horizontal
      />
      <PetList size={dogSize} />
    </>
  );
};

export default SectionList;
