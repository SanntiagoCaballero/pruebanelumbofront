import { Breadcrumb, Button, Col, Image, Layout, Rate, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../../hooks/useProductStore';
import { Content } from 'antd/es/layout/layout';
import PhoneImg from '../cards/PhoneImg';

const SelectedPhone = () => {
	const navigate = useNavigate();
	const { prodSelected } = useProductStore();

	return (
		<Row style={{ width: '100%' }}>
			<Row className='gap-5'>
				<Button type='primary' onClick={() => navigate(-1)}>
					Volver a resultados
				</Button>
				<Breadcrumb
					items={[
						{
							title: 'Celulares',
						},
						{
							title: prodSelected.maker,
						},
						{
							title: prodSelected.name,
						},
					]}
				/>
			</Row>

			<br />

			<Row style={{ width: '100%' }}>
				<Col className=' flex justify-center  flex-[0.5]'>
					<Col>
						{Array.from({ length: 4 }).map((_, index) => (
							<Row key={index}>
								<PhoneImg src={prodSelected.urlImg} />
							</Row>
						))}
					</Col>
					<Col>
						<Image src={prodSelected.urlImg} width={'auto'} height={'100%'} />
					</Col>
				</Col>
				<Col className='flex flex-[0.5]  flex-col'>
					<Row className='flex justify-between'>
						<Col>
							<h1 className='text-[50px]'>{prodSelected.name}</h1>
							<Rate value={prodSelected.rate} />
						</Col>
						<Col>
							<h1 style={{ color: '#0149BE' }} className='text-[50px]'>
								${prodSelected.price}
							</h1>
						</Col>
					</Row>
					<Row>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla reiciendis natus iste cumque
							iure mollitia molestiae atque? Velit saepe eius soluta vel ullam provident, ad vero error delectus
							nesciunt!
						</p>
						<p style={{ color: '#0149BE' }}>Ver mas</p>
					</Row>
					<Row style={{ right: 0 }}>
						
					</Row>
					<Row></Row>
				</Col>
			</Row>
		</Row>
	);
};

export default SelectedPhone;
