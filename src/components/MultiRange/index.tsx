import {
	ChangeEvent,
	FC,
	useCallback,
	useEffect,
	useState,
	useRef,
} from 'react';
import style from './style.module.scss';

interface MultiRangeSliderProps {
	min: number;
	max: number;
	onChange: Function;
}

export function MultiRangeSlider({
	min,
	max,
	onChange,
}: MultiRangeSliderProps) {
	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);
	const minValRef = useRef<HTMLInputElement>(null);
	const maxValRef = useRef<HTMLInputElement>(null);
	const range = useRef<HTMLDivElement>(null);

	// Convert to percentage
	const getPercent = useCallback(
		(value: number) => Math.round(((value - min) / (max - min)) * 100),
		[min, max]
	);

	// Set width of the range to decrease from the left side
	useEffect(() => {
		if (maxValRef.current) {
			const minPercent = getPercent(minVal);
			const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

			if (range.current) {
				range.current.style.left = `${minPercent}%`;
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
		}
	}, [minVal, getPercent]);

	// Set width of the range to decrease from the right side
	useEffect(() => {
		if (minValRef.current) {
			const minPercent = getPercent(+minValRef.current.value);
			const maxPercent = getPercent(maxVal);

			if (range.current) {
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
		}
	}, [maxVal, getPercent]);

	// Get min and max values when their state changes
	useEffect(() => {
		onChange({ min: minVal, max: maxVal });
	}, [minVal, maxVal, onChange]);

	return (
		<>
			<div className={style.rangeContainer}>
				<div className={style.rangeSpecs}>
					<span id={style.rangeLeft}>De {minVal}</span>
					<span id={style.rangeRight}>
						{maxVal < 10 ? maxVal : `+ ${maxVal}`} anos
					</span>
				</div>
				<input
					min={min}
					max={max}
					value={minVal}
					ref={minValRef}
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						const value = Math.min(+event.target.value, maxVal - 1);
						setMinVal(value);
						event.target.value = value.toString();
					}}
					type="range"
				/>
				<input
					min={min}
					max={max}
					value={maxVal}
					ref={maxValRef}
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						const value = Math.max(+event.target.value, minVal + 1);
						setMaxVal(value);
						event.target.value = value.toString();
					}}
					type="range"
				/>
			</div>
		</>
	);
}
