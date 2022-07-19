import {Composition} from 'remotion';
import {ZebraCat} from './ZebraCat';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="ZebraCat"
				component={ZebraCat}
				durationInFrames={480}
				fps={30}
				width={720}
				height={1280}
			/>
		</>
	);
};
