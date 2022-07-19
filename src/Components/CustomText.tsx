/* eslint-disable @remotion/warn-native-media-tag */
import {spring} from 'remotion';
import React from 'react';
import {useCurrentFrame, interpolate, useVideoConfig} from 'remotion';
import config from '../config.json';

import styled from 'styled-components';

interface CustomTextProps {
	title: string;
	animationType?: 'FadeIn' | 'TitleOnly';
	subtitle?: string;
	color?: string | '';
}
const TextHolder = styled.div`
	position: absolute;
	background-color: transparent;
	height: 25%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60%;
	flex-direction: column;
	overflow: hidden;
	top: 50%;
	left: 50%;
	text-align: center;
	transform: translate(-50%, -50%);
`;
const Divider = styled.div`
	height: 10px;
	position: absolute;
	background-color: ${config.color[2]};
	width: 100%;
`;
const Title = styled.div(
	(props: {titleYPosition: number; colorOuter: string}) => ({
		transform: `translate(0, ${props.titleYPosition}px)`,
		position: 'absolute' as const,
		color: props.colorOuter || config.color[2],
		fontFamily: config.main_font[0],
		fontSize: '40px',
		fontWeight: 700,
		textShadow: `2px 2px ${config.color[3]}`,
	})
);
const Subtitle = styled.div(
	(props: {subtitleYPosition: number; colorOuter: string}) => ({
		transform: `translate(0, ${props.subtitleYPosition}px)`,
		position: 'absolute' as const,
		color: props.colorOuter || config.color[2],
		fontFamily: config.main_font[0],
		fontSize: '40px',
		fontWeight: 700,
		textShadow: `2px 2px ${config.color[1]}`,
	})
);
const TitleOnly = styled.div(
	(props: {titleXPosition: number; colorOuter: string}) => ({
		transform: `translate(${props.titleXPosition}px,0)`,
		position: 'absolute' as const,
		color: props.colorOuter || config.color[2],
		fontFamily: config.main_font[0],
		fontSize: '60px',
		fontWeight: 700,
		textShadow: `2px 2px ${config.color[3]}`,
	})
);

export const CustomText: React.FC<CustomTextProps> = (props) => {
	const {
		title = '',
		animationType = 'FadeIn',
		subtitle = '',
		color = '',
	} = props;
	const {durationInFrames, fps} = useVideoConfig();

	const frame = useCurrentFrame();
	const underscoreWidth = spring({
		from: 0,
		to: 500,
		frame: frame - 5,
		fps,
		config: {mass: 2, damping: 100, stiffness: 300},
	});
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const titleYPosition = spring({
		from: 3000,
		to: -100,
		frame,
		fps,
		config: {mass: 10, damping: 110, stiffness: 300},
	});

	const subtitleYPosition = spring({
		from: -3000,
		to: 100,
		frame,
		fps,
		config: {mass: 10, damping: 110, stiffness: 300},
	});
	const titleXPosition = spring({
		from: -3000,
		to: 0,
		frame,
		fps,
		config: {mass: 10, damping: 110, stiffness: 300},
	});

	return (
		<TextHolder>
			{animationType === 'FadeIn' ? (
				<Title
					titleYPosition={titleYPosition}
					colorOuter={color}
					style={{opacity}}
				>
					{title}
				</Title>
			) : (
				<TitleOnly
					titleXPosition={titleXPosition}
					colorOuter={color}
					style={{opacity}}
				>
					{title}
				</TitleOnly>
			)}
			{animationType !== 'TitleOnly' && (
				<Divider style={{width: underscoreWidth, opacity}} />
			)}
			{animationType !== 'TitleOnly' && (
				<Subtitle
					subtitleYPosition={subtitleYPosition}
					colorOuter={color}
					style={{opacity}}
				>
					{subtitle}
				</Subtitle>
			)}
		</TextHolder>
	);
};
