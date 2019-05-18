import Link from 'next/link';

const Contact = () =>{

	return(
		<div style={{fontSize:'20px', color:'red'}}>
		<h1>Contact Us</h1>
		<Link href='/'>
			<button>Home</button>
		</Link>
		<Link href='/about'>
			<button>About</button>
		</Link>
		<Link href='/news'>
			<button>News</button>
		</Link>


		</div>

		)
}

export default Contact