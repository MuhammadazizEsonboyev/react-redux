import './Header.css';
import logo from '../../../public/logo/logo.svg';

function Header() {
	return <>
		<img className='logo' src={logo} alt="Logotip" />
	</>;
}

export default Header;
