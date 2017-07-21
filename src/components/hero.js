//	Utilities
import Vivus from 'vivus';
import { PureComponent } from 'react';

class Hero extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {
            style: {
                "fill": 'none',
                "strokeWidth": this.props.strokeWidth,
                "strokeLinecap": 'round',
                "strokeMiterlimit": 6,
                "strokeLinejoin": 'round',
                "stroke": this.props.color,
                "width": '400px',
                "height": '400px'
            }
        };
	}

    render() {
        return(
            <div id={this.props.name} style={this.state.style}></div>
        );
	}

    componentDidMount() {
        return new Vivus(this.props.name, {
			type: this.props.animation.type,
			duration: this.props.duration,
			start: 'autostart',
			animTimingFunction: Vivus[`${this.props.animation.animTiming}`],
			pathTimingFunction: Vivus[`${this.props.animation.pathTiming}`],
            file: this.props.source
        }, this.props.callback);
	}

}

export default Hero;
