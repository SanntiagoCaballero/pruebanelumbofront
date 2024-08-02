import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Phones from '../pages/phones/components/Phones';
import Menu from '../components/menu/Menu';
import SubMenu from '../components/menu/SubMenu';
import SelectedPhone from '../pages/phones/components/phone/SelectedPhone';

const Router = () => {
	return (
		<BrowserRouter>
			<Menu />
			<SubMenu />

			<Routes>
				<Route path='/phones' element={<Phones />}>
					<Route path=':id' element={<SelectedPhone />} />
				</Route>
				<Route path='*' element={<Phones />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
