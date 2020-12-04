
import Link from 'next/link'
export default function HeaderPart(){
    return(
        <header>
        <div className="header-area">
          <div id="sticky-header" className="main-header-area">
            <div className="container p-0">
              <div className="row align-items-center no-gutters">
                <div className="col-xl-4 col-lg-4">
                  <div className="logo-img">
                    <a href="/">
                      <img src="images/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                            <Link className="active" href="/"><a>home</a></Link>
                          
                        </li>
                        <li>
                         <Link  href="/AboutPage"><a >About us </a></Link> 
                        </li>
                        <li>
                          <Link href="/ProductPage"><a> Products </a></Link>
                        </li>
                        <li>
                        <Link  href="/GalleryPage"><a>Gallery</a></Link> 
                        </li>
                        <li>
                          <Link  href="/ContactPage"><a> Contact us </a></Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}