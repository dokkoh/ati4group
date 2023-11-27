function MenuBurger({ handleShowLinks, showLinks }) {


  return (
    <button type="button" role="button" className='navbar__burger' onClick={handleShowLinks} aria-label="Menu hamburger">
          <span className={`burger__bar ${showLinks ? 'open' : ''}`}></span>
        </button>
  )
}

export default MenuBurger;