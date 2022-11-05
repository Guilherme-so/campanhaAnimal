import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Classe do próprio Next
 * Inserir fontes e os scripts da página
 * (url) https://nextjs.org/docs/advanced-features/custom-document
 */

export default class MyDocuments extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
						rel="stylesheet"
					/>

					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Quicksand:wght@300&family=Mukta:wght@300;400;500;600;700;800&display=swap"
						rel="stylesheet"
					></link>

					<link rel="icon" href="./assets/images/paw.svg" type="image/svg+xml" />
				</Head>

				<Main />
				<NextScript />
			</Html>
		);
	}
}
