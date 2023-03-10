import { CoffeeCardListComponent } from '../../../../components/CoffeeCardListComponent'
import { useCart } from '../../../../hooks/useCart'
import { numberToPrice } from '../../../utils/numberToPrice'
import {
  CoffeesList,
  ConfirmOrderButton,
  Container,
  OrderPrices,
} from './styles'

export const OrderSumaryComponent: React.FC = () => {
  const { cart, totalItemsPrice, deliveryFee, totalPrice } = useCart()

  return (
    <Container>
      <CoffeesList>
        {cart.length > 0 ? (
          cart.map((coffee) => (
            <li key={coffee.id}>
              <CoffeeCardListComponent coffee={coffee} />
            </li>
          ))
        ) : (
          <li>
            <strong>Nenhum produto adicionardo ao carrinho</strong>
          </li>
        )}
      </CoffeesList>
      <OrderPrices>
        <span>
          <p>Total de itens</p>
          <p>{numberToPrice(totalItemsPrice)}</p>
        </span>
        <span>
          <p>Entrega</p>
          <p>{numberToPrice(deliveryFee)}</p>
        </span>
        <span>
          <strong>Total</strong>
          <strong>{numberToPrice(totalPrice)}</strong>
        </span>
      </OrderPrices>
      <ConfirmOrderButton type="submit" disabled={cart.length <= 0}>
        Confirmar pedido
      </ConfirmOrderButton>
    </Container>
  )
}
