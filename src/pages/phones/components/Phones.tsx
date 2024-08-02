import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ListPhone from './list/ListPhone';
import BuyAProductModal from './modals/BuyAProductModal';
import SiderBar from './sidebar/SideBar';

const Phones = () => {
	const location = useLocation();
	const isChildRoute = location.pathname !== '/phones';

	const [isOpenBuyProductModal, setIsOpenBuyProductModal] = useState<boolean>(false);

	const productModalOpen = (data: boolean) => {
		setIsOpenBuyProductModal(data);
	};

	return (
		<Layout className='flex justify-center p-[30px] bg-custom-bg-home  items-start '>
			{!isChildRoute && <SiderBar />}

			<Layout>
				<Content className='pl-[24px] min-[280] bg-custom-bg-home flex flex-col items-start '>
					{isChildRoute ? <Outlet /> : <ListPhone handleOpen={productModalOpen} />}
				</Content>
			</Layout>

			<BuyAProductModal isOpen={isOpenBuyProductModal} handleOpen={productModalOpen} />
		</Layout>
	);
};

export default Phones;
