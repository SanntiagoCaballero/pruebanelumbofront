import { Button, Col, Divider, Image, Modal, Row } from 'antd';

import user from '../../../../assets/svgs/user.svg';
import useProductStore from '../../hooks/useProductStore';
import { useNavigate } from 'react-router-dom';

interface Props {
	isOpen: boolean;
	handleOpen: (data: boolean) => void;
}

const BuyAProductModal = ({ isOpen, handleOpen }: Props) => {
	const navigate = useNavigate();
	const { prodSelected, showDetailsInfoProduct } = useProductStore();

	const openProductView = (id: number) => {
		handleOpen(false);
		showDetailsInfoProduct(id);
		navigate(`/phones/${id}`);
	};

	return (
		<Modal open={isOpen} onCancel={() => handleOpen(false)} closable={false} footer={null}>
			<Row gutter={[0, 15]} className='bg-gradient-to-bl from-white to-gray-200 rounded-[10px]'>
				<Col span={24}>
					<Image
						src={user}
						alt='imagen de prueba'
						className='w-[-webkit-fill-available]'
						preview={false}
						width={'100%'}
						height={145}
						onClick={() => openProductView(prodSelected.id)}
						style={{ cursor: 'pointer' }}
					/>
				</Col>
			</Row>
			<Row className={'flex w-full p-[10px]'}>
				<Image src={user} width={'30%'} height={40} preview={false} alt='imagen de prueba telefono' />
				<Col style={{ width: '70%' }}>
					<p>{prodSelected.name}</p>

					<Col style={{ position: 'absolute', right: 0, top: 0 }}>
						<p style={{ color: '#0149BE' }}>${prodSelected.price}</p>
					</Col>
				</Col>
			</Row>

			<Divider />

			<Row className={'flex w-full p-[10px]'}>
				<Col className='w-1/2 flex justify-center'>
					<p>1 Item en tu carrito</p>
				</Col>
				<Col className='w-1/2 flex justify-center'>
					<p style={{ color: '#0149BE' }}>Subtotal ${prodSelected.price}</p>
				</Col>
			</Row>

			<Divider />

			<Row className={'flex w-full p-[10px] justify-center items-center flex-col'}>
				<Image
					src={user}
					width={50}
					height={50}
					preview={false}
					alt='imagen de prueba telefono'
					style={{ borderRadius: '50%', border: '1px solid #0149BE' }}
				/>
				<p>Te vas a llevar este celular por solo</p>
				<p style={{ fontSize: 20 }}>$120 p/semana!</p>
				<Button
					onClick={() => openProductView(prodSelected.id)}
					className='w-[auto] h-[35px]  bg-custom-color-boton  text-[#0149BE]  hover:bg-custom-blue hover:text-custom-button-text '
				>
					COMPRAR A CREDITO
				</Button>
				<p className='text-[8px]'>---------- o puedes ------------</p>
				<p style={{ color: '#0149BE' }}>Comprar de contado</p>
			</Row>
		</Modal>
	);
};

export default BuyAProductModal;
