import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import { IMenu } from '../../common/interfaces';
import styles from './styles';

// SCREENS
import Loading from '../../components/Loading';
import Menu from './Menu';
import ErrorComponent from './Error';
import NoMenu from './NoMenu';

type IOptions = {
  isLoading: boolean;
  Error?: string;
  Data?: IMenu;
};

const withData = ({ isLoading, Data, Error }: IOptions) => (): JSX.Element => {
  const { container } = styles;

  const SafeWrapper: React.FC = ({ children }) => (
    <SafeAreaView>
      <ScrollView>
        <View style={container}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );

  if (isLoading) {
    return (
      <SafeWrapper>
        <Loading />
      </SafeWrapper>
    );
  }

  if (Data) {
    return (
      <SafeWrapper>
        <Menu MenuName={Data.MenuName} Categories={Data.Categories} />
      </SafeWrapper>
    );
  }

  if (Error) {
    return (
      <SafeWrapper>
        <ErrorComponent errorMessage={Error} />
      </SafeWrapper>
    );
  }

  return (
    <SafeWrapper>
      <NoMenu />
    </SafeWrapper>
  );
};

export default withData;
