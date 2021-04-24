import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';
import { Formik, FormikProps } from 'formik';
import { Header } from '../../common/styles/styles';
import styles from './styles';

import CreateCategories from './CreateCategories';
import { IFormValues } from './types';
import { INITIAL_VALUES } from './const';
import {
  AddCategory,
  AddProduct,
  RemoveCategory,
  RemoveProduct,
} from './utils';

const CreateMenu: React.FC = (): JSX.Element => {
  const { header, headerText } = Header;
  const { inputContainerTitle, inputTitle, inputsContainer } = styles;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={header}>
          <Text style={headerText}>Create your own menu</Text>
        </View>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={value => console.log(value)}
        >
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
                      handleChangeName={handleChange(
                        `categories[${index}].CategoryName`,
                      )}
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
                      <View>
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
              <Button title="Submit" onPress={() => handleSubmit()} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateMenu;
