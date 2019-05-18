import Link from 'next/link';
const Index = () => (
	<div>
	<h1>Hello set</h1>
	<Link href='/about'>
	<button>About Page</button>
	</Link>
	<Link href='/contact-us'>
			<button>Contact Us</button>
		</Link>
		<Link href='/news'>
			<button>News</button>
		</Link>
		<Link href='/robots'>
			<button>Robot Page</button>
		</Link>
	</div>
	);


export default Index