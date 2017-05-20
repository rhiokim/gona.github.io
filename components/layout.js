import Link from 'next/link'
import Head from './head'
import Nav from './nav'

export default ({children, title}) => (
  <div>
   <Head title={`Walk slowly | ${title}`} />

   <div className="container">
     <section className="header">
       <img className="logo" src="static/images/logo.png"/>
       <Nav />
     </section>
   </div>

   {children}

   <footer>
     <p className="copyright center">© 2017 <a href="https://github.com/slothlab">Slothlab</a>. All rights reserved.</p>
   </footer>
 </div>
)
