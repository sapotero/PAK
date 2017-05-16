import Component from 'inferno-component';
import { addOne } from '../utils/math';

interface Props {
	name: string;
}

export class App extends Component<Props, { value: number }> {
	public state = {
		value: 1
	};

	constructor(props, context) {
		super(props, context);
	}

	public doMath = () => {
		this.setState({
			value: addOne(this.state.value)
		});
	};

	public render() {
		return (
			<div>
				<h1> ROOT APP</h1>
			</div>
		);
	}
}
