// @flow
import type {Element} from 'react'
import Link from 'next/link'
import Head from './head'
import Nav from './nav'

import Router from 'next/router'
import NProgress from 'nprogress'

// @TODO need to refactor
Router.onRouteChangeStart = (url) => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

type Props = {
  children?: Element<any>,
  title?: string,
  className?: string
}

export default ({children, title = 'Gona', className}: Props) => (
  <div className={className}>
   <Head title={`Walk slowly | ${title}`} />

   <div className="container">
     <section className="header">
       <img className="logo" src="/static/images/logo.png"/>
       <Nav />
     </section>
   </div>

   {children}

   <footer>
     <p className="copyright center">© 2017 <a href="https://github.com/slothlab">Slothlab</a>. All rights reserved.</p>
   </footer>
 </div>
)
