import {AbsoluteFill, Sequence} from 'remotion';
import {CustomVideo} from './Components/CustomVideo';
import {CustomText} from './Components/CustomText';
import {Music} from './Components/Music';

import config from './config.json';

export const ZebraCat: React.FC = () => {
	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: config.color[0]}}>
			<Music sound={require(`./asset/${config.music}`)} />
			<Sequence from={0} durationInFrames={120}>
				<CustomVideo
					InnerVideoStartFrom={0}
					InnerVideoEndAt={120}
					video={require(`./asset/footage/${config.footage[5]}`)}
				/>
				<CustomText
					title={config.text.start_text[0]}
					animationType="TitleOnly"
				/>
			</Sequence>
			<Sequence from={120} durationInFrames={120}>
				<CustomVideo
					InnerVideoStartFrom={0}
					InnerVideoEndAt={120}
					video={require(`./asset/footage/${config.footage[4]}`)}
				/>
				<CustomText
					title={`${config.text.middle_text[0].main}`}
					subtitle={`${config.text.middle_text[0].secondary}`}
					color={config.color[2]}
				/>
			</Sequence>
			<Sequence from={240} durationInFrames={150}>
				<CustomVideo
					InnerVideoStartFrom={0}
					InnerVideoEndAt={150}
					video={require(`./asset/footage/${config.footage[1]}`)}
				/>
				<CustomText
					title={`${config.text.middle_text[1].product_id}`}
					subtitle={`${config.text.middle_text[1].quantity}`}
					color={config.color[2]}
					animationType="Slider"
				/>
			</Sequence>
			<Sequence from={390} durationInFrames={90}>
				<CustomVideo
					InnerVideoStartFrom={0}
					InnerVideoEndAt={90}
					video={require(`./asset/footage/${config.footage[9]}`)}
				/>
				<CustomText
					title={`${config.text.middle_text[2].product_id}`}
					subtitle={`${config.text.middle_text[2].quantity}`}
					color={config.color[2]}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};
