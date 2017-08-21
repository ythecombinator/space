//	Utilities
import { PureComponent } from 'react';

class Hero extends PureComponent {

    render() {
        return(
			<div>
				<img
					src={this.props.source}
					alt={this.props.description}
				/>
				<style jsx>{`

					img {
						width: 100%;
					}

				`}</style>
			</div>
        );
	}

}

export default Hero;
