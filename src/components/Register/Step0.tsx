import { useRegisterSteps } from '../../hooks/useRegisterSteps';

import styleLogin from '../../pages/style/login.module.scss';
import styleRegister from '../../pages/style/register.module.scss';
import { Modal } from '../Modal';
import { Progress } from '../Progress';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';

export function Step0() {
	const { step } = useRegisterSteps();

	const getDescription = (): string => {
		switch (step.actualStep) {
			case 1:
				return 'Dados pessoais';
				break;
			case 2:
				return 'Endereço';
				break;
			case 3:
				return 'Senha';
				break;
		}
	};

	return (
		<>
			<Modal title="Termos e condições">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus neque,
				maecenas sit quis ornare sagittis a platea. Maecenas suscipit enim, id
				tortor eget adipiscing fermentum. Risus lorem duis scelerisque nunc nisl
				eget placerat orci. Viverra rhoncus arcu massa pellentesque magna. Viverra
				ullamcorper id leo phasellus. Purus eget elementum turpis a ornare libero
				quis. Eget platea diam morbi massa sed. Sit eu ac pellentesque euismod enim.
				Pellentesque eu mauris aenean quis tempor sed venenatis. Ante magna duis
				malesuada montes, et. Cras scelerisque ac scelerisque sem cras imperdiet
				parturient congue nisl. Nullam ipsum tortor malesuada molestie a senectus
				at. Dolor, pellentesque metus at accumsan praesent dictumst aliquet
				vehicula. Sapien interdum diam felis duis quam. Tortor morbi sit eu morbi
				ultrices at id. Turpis id sollicitudin pulvinar ullamcorper aliquet dictum
				dui. Viverra amet imperdiet ac tempus, tristique. Erat velit ultrices duis
				sit arcu, nullam amet, dolor. Ornare tortor, neque tellus praesent enim, et
				lacus. Nisl dui turpis scelerisque massa tincidunt. Risus id pretium,
				blandit posuere porttitor egestas. Odio platea amet ullamcorper viverra
				accumsan ut mauris pulvinar. Pellentesque pulvinar ut platea egestas dis
				vivamus quis egestas. Volutpat eu arcu amet posuere aliquam vitae nibh diam
				consectetur. Consequat consectetur aliquet nec id vitae sollicitudin arcu. A
				sagittis facilisis eu tellus imperdiet. Commodo nec facilisis venenatis
				scelerisque gravida. Eget faucibus tortor, nisi nullam aliquam. Egestas
				curabitur dolor elementum proin tortor eget dui, suscipit velit. Bibendum et
				quam molestie aenean risus, tincidunt arcu augue. In lectus quisque
				fermentum pretium. Sit aliquet sit eu, malesuada sodales molestie in sed
				faucibus. Tristique sit sagittis velit blandit. Dignissim semper elementum
				tincidunt ullamcorper. Quam sit venenatis luctus non suspendisse etiam
				pharetra. Tincidunt phasellus nibh cras cras mauris, egestas semper
				accumsan. Cursus augue id eros, sollicitudin viverra volutpat vulputate non
				euismod. Massa nulla mauris nec, et donec senectus sit dictumst. Quam
				elementum turpis sodales feugiat in sit. Sed imperdiet urna, duis lectus
				euismod cursus purus in. Nisi, sagittis mi orci malesuada lectus suspendisse
				nulla vulputate. In vulputate sollicitudin quam leo sit. Erat leo sem id et
				scelerisque porttitor tincidunt netus magna. Senectus nunc, mollis tincidunt
				faucibus maecenas. A morbi lacus, orci at iaculis egestas. Neque a id turpis
				cursus ut aliquam. Fames in molestie mattis feugiat. Congue risus, vitae sem
				augue quis. Iaculis orci, habitant nunc, consectetur tortor, sapien ultrices
				egestas. Varius porta neque ipsum iaculis tristique eu. Nisl est leo, nam
				nisi, sit. Bibendum massa aliquam lacinia volutpat sem nisl erat dolor amet.
				Lorem mi nunc accumsan aliquam sodales. Sagittis vehicula eget ut sed
				faucibus proin sollicitudin enim phasellus. Odio dignissim arcu dignissim
				vitae volutpat, pretium id cras sagittis. Nisl scelerisque viverra lorem
				quis eget sit eget proin nascetur. Nibh amet praesent ridiculus maecenas
				amet, hendrerit lacus lacus et. Vitae interdum quam morbi id duis aliquam.
				Aenean donec nibh ut neque aliquam semper sollicitudin ac. Proin libero,
				lobortis mollis aliquam massa lacus. Est posuere mauris id faucibus eleifend
				ac tellus et consectetur. Pretium ut viverra adipiscing massa tellus, amet,
				amet urna. Nunc quis tellus auctor augue eget volutpat senectus. Nisl
				gravida augue sit amet sed mi tellus, et. In consequat, erat praesent odio
				ultrices. Amet, magna enim quam urna vitae ante enim proin massa. Massa
				interdum id sit ut aliquam vulputate elementum in. Mi amet, aliquam lacus
				lorem ornare scelerisque tincidunt. Adipiscing sit sagittis in condimentum
				egestas luctus urna. Libero, elementum in sed habitant justo, velit
				consequat. Ornare et posuere at praesent eget. Velit neque, libero, lectus
				donec commodo. Eu velit amet fringilla elit. Sed pulvinar non tristique quis
				laoreet purus mauris posuere. Lorem mauris sit metus rutrum rhoncus commodo
				odio quam. Eu euismod lacus, maecenas hendrerit vitae. Pellentesque arcu
				mattis dictum commodo dignissim in sodales nisl netus. Elementum vitae
				gravida dui pharetra volutpat tincidunt urna morbi. Nunc, amet sapien in
				donec fusce viverra. Quis quis nibh interdum nibh. Maecenas nisl velit
				rhoncus nunc. Sem faucibus placerat non augue id ac massa vitae, cras. Leo,
				senectus eu pretium sed. Nam eget pulvinar faucibus parturient consequat,
				egestas pellentesque. Egestas lorem risus in sit faucibus a ultrices orci.
				Aliquam ornare varius sapien suspendisse justo bibendum orci lectus. Mauris
				penatibus ut tortor nulla facilisi ullamcorper ipsum ultricies auctor.
				Aliquam sem nec sapien et proin suspendisse et gravida. Nisi, tellus
				scelerisque mauris gravida quisque vel scelerisque mauris risus. Ultricies
				aenean leo diam diam, leo odio tristique. Dignissim nunc, tincidunt laoreet
				porttitor commodo eget. Feugiat suspendisse lorem in pharetra, donec donec
				tortor vitae. Elementum porttitor laoreet sed id suspendisse vivamus. Ante
				aliquam viverra praesent habitant faucibus. Mauris cras elementum mauris
				aliquam. Diam pretium ac non, nulla molestie feugiat adipiscing nunc
				posuere. Pretium euismod eget quis diam sit tincidunt. Elit vivamus in magna
				maecenas est turpis phasellus pharetra sit. Eget egestas aliquam aliquam ut
				orci ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nulla lectus neque, maecenas sit quis ornare sagittis a platea. Maecenas
				suscipit enim, id tortor eget adipiscing fermentum. Risus lorem duis
				scelerisque nunc nisl eget placerat orci. Viverra rhoncus arcu massa
				pellentesque magna. Viverra ullamcorper id leo phasellus. Purus eget
				elementum turpis a ornare libero quis. Eget platea diam morbi massa sed. Sit
				eu ac pellentesque euismod enim. Pellentesque eu mauris aenean quis tempor
				sed venenatis. Ante magna duis malesuada montes, et. Cras scelerisque ac
				scelerisque sem cras imperdiet parturient congue nisl. Nullam ipsum tortor
				malesuada molestie a senectus at. Dolor, pellentesque metus at accumsan
				praesent dictumst aliquet vehicula. Sapien interdum diam felis duis quam.
				Tortor morbi sit eu morbi ultrices at id. Turpis id sollicitudin pulvinar
				ullamcorper aliquet dictum dui. Viverra amet imperdiet ac tempus, tristique.
				Erat velit ultrices duis sit arcu, nullam amet, dolor. Ornare tortor, neque
				tellus praesent enim, et lacus. Nisl dui turpis scelerisque massa tincidunt.
				Risus id pretium, blandit posuere porttitor egestas. Odio platea amet
				ullamcorper viverra accumsan ut mauris pulvinar. Pellentesque pulvinar ut
				platea egestas dis vivamus quis egestas. Volutpat eu arcu amet posuere
				aliquam vitae nibh diam consectetur. Consequat consectetur aliquet nec id
				vitae sollicitudin arcu. A sagittis facilisis eu tellus imperdiet. Commodo
				nec facilisis venenatis scelerisque gravida. Eget faucibus tortor, nisi
				nullam aliquam. Egestas curabitur dolor elementum proin tortor eget dui,
				suscipit velit. Bibendum et quam molestie aenean risus, tincidunt arcu
				augue. In lectus quisque fermentum pretium. Sit aliquet sit eu, malesuada
				sodales molestie in sed faucibus. Tristique sit sagittis velit blandit.
				Dignissim semper elementum tincidunt ullamcorper. Quam sit venenatis luctus
				non suspendisse etiam pharetra. Tincidunt phasellus nibh cras cras mauris,
				egestas semper accumsan. Cursus augue id eros, sollicitudin viverra volutpat
				vulputate non euismod. Massa nulla mauris nec, et donec senectus sit
				dictumst. Quam elementum turpis sodales feugiat in sit. Sed imperdiet urna,
				duis lectus euismod cursus purus in. Nisi, sagittis mi orci malesuada lectus
				suspendisse nulla vulputate. In vulputate sollicitudin quam leo sit. Erat
				leo sem id et scelerisque porttitor tincidunt netus magna. Senectus nunc,
				mollis tincidunt faucibus maecenas. A morbi lacus, orci at iaculis egestas.
				Neque a id turpis cursus ut aliquam. Fames in molestie mattis feugiat.
				Congue risus, vitae sem augue quis. Iaculis orci, habitant nunc, consectetur
				tortor, sapien ultrices egestas. Varius porta neque ipsum iaculis tristique
				eu. Nisl est leo, nam nisi, sit. Bibendum massa aliquam lacinia volutpat sem
				nisl erat dolor amet. Lorem mi nunc accumsan aliquam sodales. Sagittis
				vehicula eget ut sed faucibus proin sollicitudin enim phasellus. Odio
				dignissim arcu dignissim vitae volutpat, pretium id cras sagittis. Nisl
				scelerisque viverra lorem quis eget sit eget proin nascetur. Nibh amet
				praesent ridiculus maecenas amet, hendrerit lacus lacus et. Vitae interdum
				quam morbi id duis aliquam. Aenean donec nibh ut neque aliquam semper
				sollicitudin ac. Proin libero, lobortis mollis aliquam massa lacus. Est
				posuere mauris id faucibus eleifend ac tellus et consectetur. Pretium ut
				viverra adipiscing massa tellus, amet, amet urna. Nunc quis tellus auctor
				augue eget volutpat senectus. Nisl gravida augue sit amet sed mi tellus, et.
				In consequat, erat praesent odio ultrices. Amet, magna enim quam urna vitae
				ante enim proin massa. Massa interdum id sit ut aliquam vulputate elementum
				in. Mi amet, aliquam lacus lorem ornare scelerisque tincidunt. Adipiscing
				sit sagittis in condimentum egestas luctus urna. Libero, elementum in sed
				habitant justo, velit consequat. Ornare et posuere at praesent eget. Velit
				neque, libero, lectus donec commodo. Eu velit amet fringilla elit. Sed
				pulvinar non tristique quis laoreet purus mauris posuere. Lorem mauris sit
				metus rutrum rhoncus commodo odio quam. Eu euismod lacus, maecenas hendrerit
				vitae. Pellentesque arcu mattis dictum commodo dignissim in sodales nisl
				netus. Elementum vitae gravida dui pharetra volutpat tincidunt urna morbi.
				Nunc, amet sapien in donec fusce viverra. Quis quis nibh interdum nibh.
				Maecenas nisl velit rhoncus nunc. Sem faucibus placerat non augue id ac
				massa vitae, cras. Leo, senectus eu pretium sed. Nam eget pulvinar faucibus
				parturient consequat, egestas pellentesque. Egestas lorem risus in sit
				faucibus a ultrices orci. Aliquam ornare varius sapien suspendisse justo
				bibendum orci lectus. Mauris penatibus ut tortor nulla facilisi ullamcorper
				ipsum ultricies a
			</Modal>
			<div className={styleLogin.box} id={styleRegister.fullBoxContent}>
				<h3>Cadastro</h3>
				<h4>{getDescription()}</h4>
				<div className="separator"></div>

				<Progress progressPercentage={step.progress} />
			</div>
		</>
	);
}
