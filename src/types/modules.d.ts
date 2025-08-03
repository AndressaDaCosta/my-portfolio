declare module 'simple-icons' {
	interface SimpleIcon {
		title: string;
		slug: string;
		hex: string;
		source: string;
		svg: string;
		path: string;
	}

	const allIcons: {
		Get: (slug: string) => SimpleIcon | undefined;
	};

	export default allIcons;
}

declare module 'react-icon-cloud' {
	import { ReactNode } from 'react';

	interface IconCloudProps {
		id?: string;
		minContrastRatio?: number;
		iconSize?: number;
		backgroundHexColor?: string;
		fallbackHexColor?: string;
		tags: Array<{
			id: string;
			simpleIcon: any;
		}>;
		tagCanvasOptions?: any;
		key?: string;
	}

	export const IconCloud: React.FC<IconCloudProps>;
}

declare module 'uuid' {
	export function v4(): string;
}