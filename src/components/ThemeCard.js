import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeCard.css';

const ThemeCard = ({ theme, icon, name, publisher }) => {
	const { currentTheme, setTheme } = useTheme();
	const isActive = currentTheme === theme;

	return (
		<div className={`theme-card ${isActive ? 'active' : ''}`}>
			<div className="theme-image-wrapper">
				<img
					src={icon}
					alt={name}
					className="theme-image"
				/>
			</div>
			<div className="theme-info">
				<div className="theme-details">
					<h3>{name}</h3>
					<h5>{publisher}</h5>
				</div>
				<button 
					onClick={() => setTheme(theme)}
					className={`theme-button ${isActive ? 'active' : ''}`}
				>
					{isActive ? 'Active Theme' : 'Set Color Theme'}
				</button>
			</div>
		</div>
	);
};

export default ThemeCard;