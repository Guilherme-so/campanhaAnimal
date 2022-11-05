import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, useEffect, useState } from 'react';
import { IDefaultProps } from '../interfaces/DefaultChildrenProps';
import { IAddressProps } from '../interfaces/RegisterContextProps';

interface IStepStateProps {
	progress: number;
	actualStep: number;
}

interface IStepsData {
	1: {
		name: string;
		email: string;
		cpf: string;
		type: 'tutor' | 'ong';
	};
	2: IAddressProps;
	3: {
		password: string;
		passwordRepeat: string;
		terms: true;
	};
}

interface IRegisterProps {
	step: IStepStateProps;
	changeToNextStep(data: object): void;
	stepsData: IStepsData;
}

export const RegisterContext = createContext({} as IRegisterProps);

// Step 1 => User Contact Data
// Step 2 => User Locale Data
// Step 3 => Password and terms

export function RegisterProvider({ children }: IDefaultProps) {
	const stepsLimits = 6;
	const [registerStep, setRegisterStep] = useState<IStepStateProps>({
		actualStep: 1,
		progress: (1 * 100) / stepsLimits,
	});
	const [stepsData, setStepsData] = useState<IStepsData>();

	useEffect(() => {
		const { '@campanhaAnimal:registerSteps': sessionSteps } = parseCookies();

		destroyCookie(null, '@campanhaAnimal:registerSteps');

		// Restore progress
		if (sessionSteps) {
			const userSessionSteps = JSON.parse(sessionSteps);
			if (Object.keys(userSessionSteps).length < stepsLimits) {
				setStepsData(userSessionSteps);
				setStep(Object.keys(userSessionSteps).length + 1);
			}
		}
	}, []);

	function setStep(newStep: number): number {
		if (
			newStep < registerStep.actualStep ||
			newStep <= 0 ||
			newStep > stepsLimits
		)
			return registerStep.actualStep;

		setRegisterStep({
			actualStep: newStep,
			progress: (newStep * 100) / stepsLimits - 20,
		});
	}

	function changeToNextStep(data: {}) {
		const stepOne = { ...stepsData, [registerStep.actualStep]: { ...data } };

		setStepsData(stepOne);
		setStep(registerStep.actualStep + 1);

		setCookie(null, '@campanhaAnimal:registerSteps', JSON.stringify(stepOne), {
			maxAge: 60 * 20, // 20 minutos, porém reinicia ao atualizar página
		});
	}

	return (
		<RegisterContext.Provider
			value={{ step: registerStep, changeToNextStep, stepsData }}
		>
			{children}
		</RegisterContext.Provider>
	);
}
