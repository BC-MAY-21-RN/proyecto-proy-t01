import React, {useState} from 'react';
import {FlatList} from 'react-native';
import { sectionsList } from '../../library/constants';

import {SectionItem, TextSection} from './styledComponents';

export const Filters = ({setSize}) => {
  const [selectedId, setSelectedId] = useState(null);

  const section = ({item}) => {
    return (
      <SectionItem
        onPress={() => {
          setSize(item.title);
          setSelectedId(setSize.id);
        }}>
        <TextSection>{item.title}</TextSection>
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
