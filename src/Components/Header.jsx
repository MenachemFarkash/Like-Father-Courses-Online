import '../CSS/Header.css';
const Header = () => {
    return (
        <div class="navContainer">
            <div class="navbar">
                <h1 className="title">
                    <span className="descriptionHead-span">Like</span> Father
                </h1>

                <div></div>

                <div class="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">
                            <i class="fa fa-search">search i</i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;
