import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link to={`/`}>
        <img className='logo' alt='Blinklearning logo' src='assets/img/logo.png' />
      </Link>
    </header> 
  )
}
