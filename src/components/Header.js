//This file contains the Header of the grocery store, which contains links to homepage and
// the user profile

const Header = () => {
    return (<div>
        <div class="row">
            <nav class="nav-extended">
            <div class="nav-wrapper purple accent-2">
                    <a href="/" class="center black-text">Company Name</a>
                <ul class="left">
                    <li><a href="/"><i class="material-icons">home</i></a></li>
                                     
                </ul>
                <ul class="right">
                    <li><a href="/"><i class="material-icons">account_circle</i></a></li></ul>
                </div>
            </nav>
        </div>
    </div>)
}
export default Header