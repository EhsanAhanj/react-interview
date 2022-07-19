/* eslint-disable @remotion/warn-native-media-tag */
import React from 'react';
import {OffthreadVideo} from 'remotion';

import styled from 'styled-components';

interface CustomVideoProps {
	video: any;
	InnerVideoStartFrom: number;
	InnerVideoEndAt: number;
}

const VideoHolder = styled.div`
	position: absolute;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
export const CustomVideo: React.FC<CustomVideoProps> = (props) => {
	return (
		<VideoHolder>
			<OffthreadVideo
				muted
				startFrom={props.InnerVideoStartFrom}
				endAt={props.InnerVideoEndAt}
				src={props.video}
				style={{
					margin: '0 auto',
					height: '100%',
				}}
			/>
		</VideoHolder>
	);
};
