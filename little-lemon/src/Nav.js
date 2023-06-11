import logo from './Assets/Logo.svg'
function Nav() {
    return (
    <nav>

            <img src={logo} alt="Little Lemon Logo" />
            <ul>Home</ul>
            <ul>About</ul>
            <ul>Menu</ul>
            <ul>Reservations</ul>
            <ul>Order Online</ul>
            <ul>Login</ul>

    </nav>
    );
};


export default Nav;
