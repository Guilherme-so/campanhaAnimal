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
	images: File[];
}

const schema = yup
	.object({
		state: yup.string().min(6).max(36).required(),
		city: yup.string().required(),
		observation: yup.string(),
	})
	.required();

export function Step4({page, setPage}) {
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
	} = useForm({
		// resolver: yupResolver(schema),
	});
	const [isLoading, setIsLoading] = useState(false);
	const { stepsData, changeToNextStep } = useRegisterSteps();
	const { setModalOpen } = useModal();


	const onSubmit = async (data: any) => {
		changeToNextStep(data);
		setIsLoading(true);
		console.log(data);
		setPage((prevPage) => (prevPage +1))
	};

	return (
		<>
			<form
				className={styleLogin.boxContent}
				onSubmit={handleSubmit(onSubmit)}
				autoComplete="off"
			>
				<div className={styleLogin.imagesContainer}>
					{previewImages.map((image, index) => {
						return <img key={image} src={image} alt={`imagem${index}`} />;
					})}
				</div>
				{images.length < 5 && (
					<>
						<label htmlFor="image[]" className={styleLogin.ImageInputLabel}>
							<ImageIcon />
							<p>
								Arraste uma imagem para cá ou <span>clique aqui</span>
							</p>
							<p>Formatos aceitos: PNG, JPG e JPEG</p>
						</label>

						<input
							multiple
							type="file"
							id="image[]"
							name="images"
							maxLength={5}
							accept="image/png, image/jpeg"
							style={{ display: 'none' }}
							onChange={handleSelectImages}
						/>
					</>
				)}
				<Button type="submit" isLoading={isLoading}>
					Próximo
				</Button>
			</form>
		</>
	);
}
