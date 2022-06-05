
import Login from './logIn'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../setup/store';
import UserLayout from './user';
// import 'pretty-checkbox/src/pretty-checkbox.scss';

export default function Home() {
	const isAuth = true;
	return (
		<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			{/* <Routes /> */}
			 
			{
				isAuth ? <UserLayout  /> : <Login />
			}
			
			
		</PersistGate>
	</Provider>
	)
}
