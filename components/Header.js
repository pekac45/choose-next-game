import Link from "next/link";

const linkStyle = {
	marginRight: 15,
	border: `1px solid tomato`
};

const Header = () => (
	<div>
		<Link href="/">
			<a style={linkStyle}>Home</a>
		</Link>
		<Link href="/Add">
			<a style={linkStyle}>Add</a>
		</Link>
		<Link href="/Edit">
			<a style={linkStyle}>Edit</a>
		</Link>
		<Link href="/Logout">
			<a style={linkStyle}>Logout</a>
		</Link>
	</div>
);

export default Header;
