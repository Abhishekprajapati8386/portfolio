function Header({About, Project, Skills, Contact}) {
  return (
    <header>
       {
            <nav>
                <ul>
                    <li><a href="#about-me" onClick={About} >    About    </a></li>
                    <li><a href="#projects" onClick={Project}>   Projects </a></li>
                    <li><a href="#skills"   onClick={Skills} >   Skills   </a></li>
                    <li><a href="#contact"  onClick={Contact} >  Contact  </a></li>
                </ul>
            </nav>
        }
    </header>
  );
}

export default Header;
