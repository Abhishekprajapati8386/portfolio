function Header({About, Project, Skills, Contact}) {
  return (
    <header>
       {
            <nav>
                <ul>
                    <li><a href="" onClick={About} >    About    </a></li>
                    <li><a href="" onClick={Project}>   Projects </a></li>
                    <li><a href=""   onClick={Skills} >   Skills   </a></li>
                    <li><a href=""  onClick={Contact} >  Contact  </a></li>
                </ul>
            </nav>
        }
    </header>
  );
}

export default Header;
