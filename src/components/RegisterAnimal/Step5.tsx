import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useModal } from '../../hooks/useModal';
import { useRegisterSteps } from '../../hooks/useRegisterSteps';
import styleRegister from '../../pages/style/register.module.scss';
import styleLogin from '../../pages/style/login.module.scss';
import { yup } from '../../utils/schema';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { PlusIcon } from '../PlusIcon';
import { ImageIcon } from '../ImageIcon';
interface IBlurProps {
	data: string;
}

interface IFormProps {
	state: string;
	city: string;
	observation: string;
}

const schema = yup
	.object({
		state: yup.string().min(6).max(36).required(),
		city: yup.string().required(),
		observation: yup.string(),
	})
	.required();

export function Step5() {
	const [images, setImages] = useState<File[]>([]);
	const [previewImages, setPreviewImages] = useState<string[]>([]);

	function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
		if (!event.target.files) {
			return;
		}
		if (event.target.files.length > 5) {
			alert('selecione apenas 5 imagens');
			return;
		}
		if (images.length + event.target.files.length > 5) {
			alert('selecione apenas 5 imagens');
			return;
		}
		const SelectedImages = Array.from(event.target.files);

		setImages(SelectedImages);

		const SelectedImagesPreview = SelectedImages.map((image) => {
			return URL.createObjectURL(image);
		});
		setPreviewImages(SelectedImagesPreview);
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<IFormProps>({
		// resolver: yupResolver(schema),
	});
	const [isLoading, setIsLoading] = useState(false);
	const { stepsData, changeToNextStep } = useRegisterSteps();
	const { setModalOpen } = useModal();
	const onSubmit = async (data: IFormProps) => {
		// changeToNextStep(data);
		// setIsLoading(true);
		console.log(data);
	};

	return (
		<>
			<form
				className={styleLogin.boxContent}
				onSubmit={handleSubmit(onSubmit)}
				autoComplete="off"
			>
				<h1>termos</h1>
				<Button type="submit" isLoading={isLoading}>
					Próximo
				</Button>
			</form>
		</>
	);
}
