import profilePic from '../assets/passphoto.jpg';

function Header() {
    return (
        <header className="header">
            <img src={profilePic} alt="Дмитро Вах" className="profile-photo" />
            <h1>Дмитро Вах </h1>
        </header >
    );
}

export default Header;
