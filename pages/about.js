import Link from 'next/Link';
import Image from '../components/Image';

const About = () => {
	return (
		<div style={{fontSize:'20px', color:'blue'}}>
		<h1>About Page</h1>
		<Image/>
		<Link href='/'>
			<button>Home</button>
		</Link>
		<Link href='/contact-us'>
			<button>Contact Us</button>
		</Link>
		</div>

		)
}
export default About