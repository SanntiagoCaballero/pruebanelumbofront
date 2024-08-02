import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row } from 'antd';
import { useEffect } from 'react';
import useProductStore from '../../hooks/useProductStore';
import PhoneCard from '../cards/PhoneCard';
import { response } from '../../../../utils/constants';

interface Props {
	handleOpen: (data: boolean) => void;
}

const ListPhone = ({ handleOpen }: Props) => {
	const { products, valueChecked, filterProductsByMark, filterInfoProduct, setProducts } = useProductStore();

	useEffect(() => {
		if (valueChecked.length > 0) {
			filterProductsByMark(valueChecked);
		} else {
			setProducts(response);
		}
	}, [valueChecked]);

	return (
		<div>
			<Row>
				<Col span={24}>
					<div className='w-[563px]'>
						<Input
							onChange={(e) => filterInfoProduct(e.target.value)}
							placeholder='Encuentra el producto que necesitas'
							prefix={<SearchOutlined />}
							className='w-[563px] h-[44px] bg-white bg-no-repeat border-[1px] border-solid border-[#d8e0e9] opacity-[1] rounded-[24px]'
						/>
					</div>
				</Col>
				{products.map((product, index) => (
					<Col key={index}>
						<PhoneCard product={product} openModal={handleOpen} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default ListPhone;
