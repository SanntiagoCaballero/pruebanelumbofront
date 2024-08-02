import { ReactNode } from 'react';

const ContentSideBar = ({ text, children }: { text: any | string; children: any }) => {
	return (
		<div>
			<span>{text}</span>
			{children &&
				children.map((child: { key: Number; label: ReactNode }, childIndex: Number) => (
					<div key={`sub${childIndex}`}>{child.label}</div>
				))}
		</div>
	);
};

export default ContentSideBar;
