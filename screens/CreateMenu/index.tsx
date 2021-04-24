import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Formik, FormikProps } from 'formik';
import QRcomponent from 'react-native-qrcode-svg';
import { Header } from '../../common/styles/styles';
import styles from './styles';

import CreateCategories from './CreateCategories';
import { ICreateMenuProps, IFormValues } from './types';
import { INITIAL_VALUES } from './const';
import {
  AddCategory,
  AddProduct,
  RemoveCategory,
  RemoveProduct,
} from './utils';
import { IMenu } from '../Menu/types';

import { createMenu } from '../../api';
import { QRSize } from '../../common/styles';
import SCREENS from '../../navigation/constants';

const CreateMenu: React.FC<ICreateMenuProps> = ({
  navigation: { navigate },
}): JSX.Element => {
  const { header, headerText } = Header;
  const {
    inputContainerTitle,
    inputTitle,
    inputsContainer,
    fullQRContainer,
    qrButtonContainer,
    saveButtonContainer,
    addCategoryButtonContainer,
  } = styles;

  const [QR, setQR] = useState('');
  const [FullQR, setFullQR] = useState(false);

  const handleFormSubmit = ({ title, categories }: IFormValues) => {
    const Menu: IMenu = {
      MenuName: title,
      Categories: categories,
    };
    createMenu(Menu).then(value => setQR(value.metadata.id));
  };

  const handleSave = () => {
    navigate(SCREENS.menu, { id: QR });
  };

  if (FullQR) {
    return (
      <SafeAreaView>
        <TouchableOpacity
          style={fullQRContainer}
          onPress={() => setFullQR(false)}
        >
          <QRcomponent value={QR} size={QRSize + 100} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={header}>
          <Text style={headerText}>Create your own menu</Text>
        </View>
        <Formik initialValues={INITIAL_VALUES} onSubmit={handleFormSubmit}>
          {({
            handleChange,
            handleSubmit,
            setFieldValue,
            values,
          }: FormikProps<IFormValues>) => (
            <View style={inputsContainer}>
              <View style={inputContainerTitle}>
                <TextInput
                  onChangeText={handleChange('title')}
                  value={values.title}
                  style={inputTitle}
                  placeholder="Menu title"
                />
              </View>
              {values.categories.map(
                ({ CategoryName, products, id }, index) => (
                  <View key={id || index}>
                    <CreateCategories
                      name={CategoryName}
                      handleChangeCategoryName={handleChange(
                        `categories[${index}].CategoryName`,
                      )}
                      handleChangeProductName={pIndex =>
                        handleChange(
                          `categories[${index}].products[${pIndex}].ProductName`,
                        )
                      }
                      handleChangeProductPrice={pIndex =>
                        handleChange(
                          `categories[${index}].products[${pIndex}].price`,
                        )
                      }
                      products={products}
                      id={id || index}
                      removeCategory={() =>
                        RemoveCategory(values.categories, setFieldValue, index)
                      }
                      addProduct={() =>
                        AddProduct(values.categories, setFieldValue, index)
                      }
                      removeProduct={pIndex =>
                        RemoveProduct(
                          values.categories,
                          setFieldValue,
                          index,
                          pIndex,
                        )
                      }
                    />
                    {values.categories.length - 1 === index && (
                      <View style={addCategoryButtonContainer}>
                        <Button
                          title="Add Category"
                          onPress={() =>
                            AddCategory(values.categories, setFieldValue)
                          }
                        />
                      </View>
                    )}
                  </View>
                ),
              )}
              <Button
                disabled={QR === ''}
                title="Submit"
                onPress={() => handleSubmit()}
              />
            </View>
          )}
        </Formik>
        {QR !== '' && (
          <>
            <TouchableOpacity
              style={qrButtonContainer}
              onPress={() => setFullQR(true)}
            >
              <Text>Click to see the full QR!</Text>
              <QRcomponent value={QR} size={QRSize} />
            </TouchableOpacity>
            <View style={saveButtonContainer}>
              <Button title="Save menu" onPress={handleSave} />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateMenu;
