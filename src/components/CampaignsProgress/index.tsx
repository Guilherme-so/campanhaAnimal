import React from 'react';
import { createStitches, styled } from '@stitches/react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import style from '../../pages/style/campaigns.module.scss';

const StyledProgress = styled(ProgressPrimitive.Root, {
	position: 'relative',
	overflow: 'hidden',
	background: '#C4C4C4',
	borderRadius: '99999px',
	width: 300,
	height: 14,
	margin: '0 10px',
	'@bp1': {
		width: 138,
	},
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
	backgroundColor: '#99E7B7',
	width: '100%',
	height: '100%',
	transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

// Exports
export const Progress = StyledProgress;
export const ProgressIndicator = StyledIndicator;

// Your app...
export default function CampaignsProgress({ value, className }: {value?: any, className?: any}) {
	return (
		<Progress value={100} className={style.progressBar}>
			<ProgressIndicator style={{ transform: `translateX(-${100 - value}%)` }} />
		</Progress>
	);
}
