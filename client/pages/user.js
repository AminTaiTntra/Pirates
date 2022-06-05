import React from 'react';
import FullScreenLoader from '../component/common/fullScreenLoader';
import Footer from '../component/footer';
import Header from '../component/header';
import SideBar from '../component/sideBar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../setup/store';
const UserLayout = (props) => {
  const { loaderCount, component: Component, ...rest } = props;
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <SideBar {...rest} />
      <Header {...rest} />
      <main>
        <Component {...rest} />
      </main>
      {loaderCount > 0 && <FullScreenLoader />}
      <Footer />

    </PersistGate>
	</Provider >
    
  );
};
export default UserLayout;
