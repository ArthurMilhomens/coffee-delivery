import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useSwitchTheme } from '../../hooks/useSwitchTheme'
// Icons & Images //
import { House, MapPin, Moon, ShoppingCart, Sun } from 'phosphor-react'
import DarkLogoCoffeeDelivery from '../../assets/logo.svg'
import LightLogoCoffeeDelivery from '../../assets/logo-light.svg'
// Styles //
import {
  HeaderContainer,
  LocationBadge,
  CartButton,
  HomeButton,
} from './styles'

export function Header() {
  const navigate = useNavigate()
  const { cart } = useCart()
  const { toggleTheme, themeSelected } = useSwitchTheme()

  function handleToggleTheme() {
    toggleTheme(themeSelected === 'light' ? 'dark' : 'light')
  }

  return (
    <HeaderContainer>
      <img
        src={
          themeSelected === 'light'
            ? DarkLogoCoffeeDelivery
            : LightLogoCoffeeDelivery
        }
        alt="Copo de café"
      />
      <div>
        <LocationBadge title="Taboão da Serra, SP">
          <MapPin size={18} weight="fill" />
          <span>Brasília, DF</span>
        </LocationBadge>

        <CartButton
          title="Carrinho"
          onClick={() => navigate('/checkout')}
          numberToItensAtShopCart={cart.length}
        >
          <ShoppingCart size={18} weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
