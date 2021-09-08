import React, {useState} from 'react';
import {Text, FlatList} from 'react-native';
import sectionsList from '../../constants/sections';
import {SectionItem} from './styledComponents';

const Filters = ({setSize}) => {
  const [selectedId, setSelectedId] = useState(null);

  const section = ({item}) => {
    return (
      <SectionItem onPress={() => setSize(item.title)}>
        <Text>{item.title}</Text>
      </SectionItem>
    );
  };

  return (
    <FlatList
      data={sectionsList}
      renderItem={section}
      keyExtractor={item => item.id}
      extraData={selectedId}
      horizontal
    />
  );
};

export default Filters;