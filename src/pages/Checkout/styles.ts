import styled from 'styled-components'

export const Container = styled.main`
  padding-bottom: 4rem;
  margin-top: 2.5rem;
  > form {
    display: grid;
    grid-template-columns: 1fr 448px;
    gap: 2rem;

    > fieldset {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    > .checkout__order-sumary {
      > h2 {
        margin-bottom: 1rem;
      }
    }

    @media (max-width: 1120px) {
      grid-template-columns: 1.5fr 1fr;
    }

    @media (max-width: 820px) {
      grid-template-columns: 1fr;
    }
  }
`

export const AddressDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  grid-template-areas:
    'cep empty empty'
    'street street street'
    'number complement complement'
    'district city state';

  .input-wrapper-CEP {
    grid-area: cep;
  }

  .input-wrapper-street {
    grid-area: street;
  }

  .input-wrapper-streetNumber {
    grid-area: number;
  }
  .input-wrapper-complement {
    grid-area: complement;
  }
  .input-wrapper-district {
    grid-area: district;
  }
  .input-wrapper-city {
    grid-area: city;
  }
  .input-wrapper-state {
    grid-area: state;
  }
  .input-wrapper-complement {
    grid-area: complement;
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
export const PaymentFieldset = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`
