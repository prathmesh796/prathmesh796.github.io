const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <ul className="p-4 bg-gray-800 text-white list-none">
                <li className=""><a href="/">Home</a></li>
                <li><a href="/pages/projects.html">Projects</a></li>
                <li><a href="/pages/blogs.html">Blog</a></li>
                <li><a href="/pages/about.html">About</a></li>
            </ul>

            <button></button>
        </nav>
    );
};

export default Navbar;