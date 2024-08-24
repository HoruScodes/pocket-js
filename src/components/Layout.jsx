import NavBarComponent from './nav-bar'
import FooterComponent from './footer-component'

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBarComponent />
      <main className="flex-grow">{children}</main>
      <FooterComponent />
    </div>
  )
}
