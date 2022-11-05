import React, { ReactNode, useState } from 'react';
import { styled, keyframes } from '@stitches/react';
import { violet, blackA, red, mauve } from '@radix-ui/colors';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineFileDone } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { CheckIcon } from '../CheckIcon';

const overlayShow = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 },
});

const contentShow = keyframes({
	'0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
	'100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
	backgroundColor: blackA.blackA9,
	position: 'fixed',
	inset: 0,
	'@media (prefers-reduced-motion: no-preference)': {
		animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},
});

const StyledContent = styled(AlertDialogPrimitive.Content, {
	backgroundColor: 'white',
	borderRadius: '20px',
	boxShadow:
		'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	// width: '90vw',
	maxWidth: '800px',
	minWidth: '450px',
	maxHeight: '85vh',
	padding: 25,
	'@media (prefers-reduced-motion: no-preference)': {
		animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},
	'&:focus': { outline: 'none' },
});

function Content({ children, ...props }) {
	return (
		<AlertDialogPrimitive.Portal>
			<StyledOverlay />
			<StyledContent {...props}>{children}</StyledContent>
		</AlertDialogPrimitive.Portal>
	);
}

const StyledDescription = styled(AlertDialogPrimitive.Description, {
	marginBottom: 20,
	color: mauve.mauve11,
	fontSize: 15,
	lineHeight: 1.5,
	maxWidth: '511px',
});

const Title = styled(AlertDialogPrimitive.Title, {
	fontStyle: 'normal',
	fontWeight: '700',
	fontSize: '35px',
	lineHeight: '43px',
	color: '#FF9D71',
	marginBottom: '22px',
});

const AnimalDescriptionData = styled('span', {
	fontStyle: 'normal',
	fontWeight: '600',
	fontSize: '16px',
	lineHeight: '20px',
	color: '#595959',
});

const AnimalDescriptionWrapper = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
});

// Exports
export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogContent = Content;

export const AlertDialogDescription = StyledDescription;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = styled(AlertDialogPrimitive.Cancel, {
	position: 'absolute',
	top: '10px',
	right: '10px',
});

// Your app...
const Flex = styled('div', { display: 'flex' });

const Button = styled('button', {
	all: 'unset',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: 4,
	fontSize: 15,
	lineHeight: 1,
	fontWeight: 500,
	height: 30,
	width: 30,

	variants: {
		variant: {
			cancel: {
				backgroundColor: 'white',
				color: violet.violet11,
				boxShadow: `0 2px 10px ${blackA.blackA7}`,
				'&:hover': { backgroundColor: mauve.mauve3 },
				'&:focus': { boxShadow: `0 0 0 2px black` },
				cursor: 'pointer',
				borderRadius: '50px',
			},
		},
	},

	defaultVariants: {
		variant: 'violet',
	},
});

interface ModalProps {
	children: ReactNode;
}

const Step = styled('div', {
	width: '60px',
	height: '60px',
	backgroundColor: '#99E7B7',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '50%',

	variants: {
		type: {
			error: {
				backgroundColor: '#FF9D71',
			},
		},
	},
});

const StepWrapper = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	maxWidth: '94px',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '5px',
});

const StepDescription = styled('div', {
	fontStyle: 'normal',
	fontWeight: '600',
	fontSize: '16px',
	lineHeight: '20px',
	textAlign: 'center',
	color: '#595959',
});

const CurrentSteps = styled('div', {
	display: 'flex',
	gap: '30px',
	flexWrap: 'wrap',
	marginTop: '60px',
});

const MotivationTitle = styled('p', {
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '16px',
	lineHeight: '20px',
	color: '#FF9D71',
	marginTop: '20px',
	span: {
		marginLeft: '5px',
		color: '#595959',
	},
});

const Warning = styled('p', {
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '16px',
	lineHeight: '20px',
	color: '#FF9D71',
	marginTop: '20px',
});

const CancelButton = styled('button', {
	fontStyle: 'normal',
	fontWeight: '700',
	fontSize: '14px',
	lineHeight: '17px',
	textAlign: 'center',
	color: '#FFFFFF',
	width: '200px',
	height: '50px',
	backgroundColor: '#FF9D71',
	cursor: 'pointer',
	border: 'none',
	borderRadius: '5px',
	marginTop: '20px',
});

const ConfirmCancelButton = styled('button', {
	width: '149px',
	height: '36px',
	left: '646px',
	top: '1407px',
	border: 'none',
	background: '#99E7B7',
	boxShadow: '2px 3px 5px rgba(185, 185, 184, 0.45)',
	borderRadius: '50px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontStyle: 'normal',
	fontWeight: '700',
	fontSize: '14px',
	lineHeight: '17px',

	color: '#FFFFFF',
});

const ConfirmCancelContent = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	gap: '30px',
	marginTop: '40px',
});

const SucessCancellation = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	gap: '30px',
	marginTop: '30px',
});

export function DonationModal({ children }: ModalProps) {
	const [cancellSolicitation, setCancellSolicitation] = useState(false);
	const [hasFinishedCancellation, setHasFinishedCancellation] = useState(false);
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

			<AlertDialogContent>
				{cancellSolicitation === true ? (
					<>
						{hasFinishedCancellation === true && (
							<SucessCancellation>
								<CheckIcon />
								<span>Adoção cancelada com sucesso!</span>
							</SucessCancellation>
						)}
						{hasFinishedCancellation === false && (
							<ConfirmCancelContent>
								<span>Tem certeza que deseja cancelar a adoção?</span>
								<ConfirmCancelButton type="button">Cancelar</ConfirmCancelButton>
							</ConfirmCancelContent>
						)}
						<AlertDialogCancel asChild>
							<Button variant="cancel" onClick={() => setCancellSolicitation(false)}>
								<GrFormClose size="24px" color="white" />
							</Button>
						</AlertDialogCancel>
					</>
				) : (
					<>
						<div style={{ display: 'flex', gap: '28px' }}>
							<div>
								<img
									style={{
										width: '100%',
										maxWidth: '338px',
										height: '266',
										borderRadius: '20px',
									}}
									src="/assets/images/mureta_base.png"
									alt=""
								/>
							</div>
							<div>
								<Title>Adote o Mureta</Title>
								<AlertDialogDescription>
									Eu já tive uma casa, mas depois de 3 anos eu não tinha mais espaço na
									vida família, então me deixaram no abrigo. Chorei por noites seguidas,
									não queria comer e só ficava tentando entender o que eu tinha feito
									para ser descartado. Meus tios falam que eu sou um dos meninos mais
									doces do Instituto e que não tem nada de errado comigo.
								</AlertDialogDescription>

								<AnimalDescriptionWrapper>
									<AnimalDescriptionData>Idade: Até 10 anos</AnimalDescriptionData>
									<AnimalDescriptionData>Porte: G (mais de 25kg)</AnimalDescriptionData>
									<AnimalDescriptionData> Sexo: Macho</AnimalDescriptionData>
								</AnimalDescriptionWrapper>
							</div>
						</div>
						<CurrentSteps>
							<StepWrapper>
								<Step>
									<BsCheckLg size="20px" color="white" />
								</Step>
								<StepDescription>Solicitação enviada</StepDescription>
							</StepWrapper>
							<StepWrapper>
								<Step>
									<AiOutlineFileDone size="26px" color="white" />
								</Step>
								<StepDescription>Avaliando solicitação</StepDescription>
							</StepWrapper>
							<StepWrapper>
								<Step>
									<AiOutlineFileDone size="26px" color="white" />
								</Step>
								<StepDescription>Avaliando solicitação</StepDescription>
							</StepWrapper>
						</CurrentSteps>

						<CancelButton onClick={() => setCancellSolicitation(true)}>
							Cancelar solicitação
						</CancelButton>
						<AlertDialogCancel asChild>
							<Button variant="cancel" onClick={() => setCancellSolicitation(false)}>
								<GrFormClose size="24px" color="white" />
							</Button>
						</AlertDialogCancel>
					</>
				)}
			</AlertDialogContent>
		</AlertDialog>
	);
}
