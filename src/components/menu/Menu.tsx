import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Col, Image, Row } from 'antd';
import { Header } from 'antd/es/layout/layout';

import logo from '../../assets/svgs/logo.svg';

const Menu = () => {
	return (
		<Header className='flex justify-between items-center bg-custom-blue pr-[10%] '>
			<Image src={logo} width={203} height={45} alt='logo de la empresa MacroPay' preview={false} />
			<Row gutter={24}>
				<Col span={12}>
					<Button className='bg-custom-color-boton  h-[50px] w-[140px] border-[none] text-[#0149BE] ' block>
						Crear Tu Cuenta
					</Button>
				</Col>
				<Col span={12}>
					<Button
						style={{
							backgroundColor: 'transparent',
							height: 50,
							width: 140,
							color: '#FFD300',
							borderStyle: 'none',
						}}
						block
					>
						Iniciar Sesión
						<ShoppingCartOutlined
							style={{ color: 'black', borderRadius: '10px', backgroundColor: '#ccc', padding: '5px' }}
						/>
					</Button>
				</Col>
			</Row>
		</Header>
	);
};

export default Menu;
