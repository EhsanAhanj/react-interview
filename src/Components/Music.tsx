import React from 'react';
import {Audio} from 'remotion';

interface MusicProps {
	sound: any;
}

export const Music: React.FC<MusicProps> = (props) => {
	return <Audio src={props.sound} />;
};
