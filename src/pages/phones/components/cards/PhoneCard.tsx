import { HeartOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Image, Rate, Row } from 'antd';
import { Product } from '../../../../models/product/Product';
import useProductStore from '../../hooks/useProductStore';

interface Props {
	product: Product;
	openModal: (data: boolean) => void;
}

const PhoneCard = ({ product, openModal }: Props) => {
	const { setProduct } = useProductStore();

	const openDetails = () => {
		openModal(true);
		setProduct(product);
	};

	return (
		<Card
			// title={`${product.name}`}
			bordered={false}
			className='w-[300px] h-[400px] m-[10px] border-[1px] border-solid cursor-pointer'
		>
			<Image
				onClick={openDetails}
				src={product.urlImg}
				alt='imagen de prueba'
				height={220}
				width={200}
				className='picturecentered'
				style={{ backgroundColor: 'red' }}
				preview={false}
			/>
			<Divider />

			<Row className='justify-end gap-5'>
				<Col>
					<p style={{ fontWeight: 600 }}>{product.name}</p>
					<Rate allowHalf defaultValue={product.rate} />
					<p style={{ fontSize: 10, color: 'gray' }}>$120 p/semana</p>
					<p style={{ fontSize: 10, color: 'gray' }}>o $520 p/mes</p>
				</Col>
				<Col>
					<p style={{ color: '#0149BE', fontWeight: 700, fontSize: 30 }}>${product.price}</p>
					<Button
						onClick={openDetails}
						className='w-[80px] h-[35px]  bg-custom-color-boton  text-[#0149BE]  hover:bg-custom-blue hover:text-custom-button-text '
					>
						Lo Quiero!
					</Button>
				</Col>
			</Row>

			<Col style={{ position: 'absolute', right: 0, top: 0, padding: 10 }}>
				<HeartOutlined style={{ fontSize: 'xx-large', color: 'gray', fontWeight: 100 }} />
			</Col>
		</Card>
	);
};

export default PhoneCard;
