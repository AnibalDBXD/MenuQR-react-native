import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Sizes, Colors } from '../../common/styles';
import styles from './styles';

const DeleteButton: React.FC<{ handlePress: () => void }> = ({
  handlePress,
}): JSX.Element => {
  const { styleButton } = styles;
  return (
    <TouchableOpacity style={styleButton} onPress={handlePress}>
      <Feather name="delete" size={Sizes.medium} color={Colors.Black} />
    </TouchableOpacity>
  );
};

export default DeleteButton;
