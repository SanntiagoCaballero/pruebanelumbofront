import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, InputNumber, Rate, Row } from 'antd';
import Sider from 'antd/es/layout/Sider';
import ContentSideBar from './ContentSideBar';
import useProductStore from '../../hooks/useProductStore';
import { useCallback, useRef, useState } from 'react';

const arrayChecks: string[] = ['Apple', 'Samsung', 'Xiaomi', 'Motorola'];

const SiderBar = () => {
	const { setValueChecked, filterByReviews, filterByPrice, setPriceRange } = useProductStore((state) => state);

	const [minPrice, setMinPrice] = useState<number>(100);
	const [maxPrice, setMaxPrice] = useState<number>(5000);

	const handleCheckboxChange = (checkedValues: string[]) => {
		setValueChecked(checkedValues);
	};

	const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
	const debounceFilterByPrice = useCallback(
		(min: number, max: number) => {
			if (debounceTimeout.current) {
				clearTimeout(debounceTimeout.current);
			}

			debounceTimeout.current = setTimeout(() => {
				filterByPrice({ min, max });
			}, 300); // 300ms de retraso
		},
		[filterByPrice],
	);

	const handlePriceChange = (min: number, max: number) => {
		setPriceRange({ min, max });
		debounceFilterByPrice(min, max);
	};

	const contenido = [
		{
			key: 1,
			text: <h4 className='text-custom-blue font-bold'>Marcas</h4>,
			icon: UserOutlined,
			children: [
				{
					key: 2,
					label: (
						<Checkbox.Group
							className=' h-auto table-caption overflow-auto w-full'
							onChange={handleCheckboxChange}
							options={arrayChecks}
						/>
					),
				},
			],
		},
		{
			text: <h4 className='text-custom-blue font-bold'>Precio</h4>,
			icon: LaptopOutlined,
			children: [
				{
					key: 3,
					label: (
						<div className='flex gap-[3px]'>
							<InputNumber
								className='text-slate-400'
								min={0}
								value={minPrice}
								onChange={async (value) => {
									const numericValue = value ?? 0;
									await setMinPrice(numericValue);
									handlePriceChange(numericValue, maxPrice);
								}}
							/>
							-
							<InputNumber
								className='text-slate-400'
								min={0}
								value={maxPrice}
								onChange={async (value) => {
									const numericValue = value ?? 0;
									await setMaxPrice(numericValue);
									handlePriceChange(minPrice, numericValue);
								}}
							/>
						</div>
					),
				},
			],
		},
		{
			text: <h4 className='text-custom-blue font-bold'>Reviews</h4>,
			icon: NotificationOutlined,
			children: [{ key: 4, label: <Rate allowHalf defaultValue={4} onChange={filterByReviews} /> }],
		},
		{ text: <h4 className='text-custom-blue font-bold'>Memoria</h4>, icon: NotificationOutlined },
		{ text: <h4 className='text-custom-blue font-bold'>Rango</h4>, icon: NotificationOutlined },
		{ text: <h4 className='text-custom-blue font-bold'>Cámara</h4>, icon: NotificationOutlined },
	];

	return (
		<Sider width={250} theme='light' className='border-[1px] p-[10px] h-[654px]  shadow-lg shadow-gray-400'>
			<Row className='flex flex-col gap-[25px] h-[654px]'>
				{contenido.map(({ text, children }, index) => {
					const key = String(index + 1);
					return <ContentSideBar key={key} text={text} children={children} />;
				})}
			</Row>
		</Sider>
	);
};

export default SiderBar;
