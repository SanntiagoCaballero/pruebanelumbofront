import { Row } from 'antd';

const itemsSubMenu = [
	{
		text: 'Home',
	},
	{
		text: 'Celulares',
	},
	{
		text: 'Motocicletas',
	},
	{
		text: 'Tus préstamos',
	},
	{
		text: 'Tiendas',
	},
	{
		text: 'Tracking',
	},
	{
		text: 'Club Macropay',
	},
];

const SubMenu = () => {
	return (
		<Row
			className='p-[10px] mb-[4px] bg-white shadow-custom-header z-[1] gap-[7px]'
			// style={{ padding: 10, gap: 7, marginBottom: 4 }}
		>
			{itemsSubMenu.map((item, index) => (
				<div key={index} className='pl-[30px] flex justify-center'>
					{item.text}
				</div>
			))}
		</Row>
	);
};

export default SubMenu;
