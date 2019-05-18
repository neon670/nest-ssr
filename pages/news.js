import Link from 'next/link';

const News = () =>{
	return (
		<div style={{fontSize: '20px', color: 'black'}}>
		<h1>News</h1>
		<Link href='/'>
			<button>Home</button>
		</Link>
		<Link href='/about'>
			<button>About</button>
		</Link>
		<Link href='/contact-us'>
			<button>Contact Us</button>
		</Link>
		</div>

		)

}

export default News;