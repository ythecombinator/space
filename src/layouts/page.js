// Layouts
import Head from './head';

const page = ({ children, data }) => (

	<main>

		<Head data= {data} > </Head>

		<div className="landing">

			{children}

			<style jsx global>{`
				.landing .content {
					max-width: 22em;
					margin: 90px;
				}

				.landing .content > :first-child {
					margin-top: 0;
				}

				@media (max-width: 768px) {
					.landing .content {
						margin: 45px auto;
					}
				}

				@media (max-width: 468px) {
					.landing .content {
						margin: 15px;
					}
				}

			`}</style>
		</div>
	</main>
);

export default page;
