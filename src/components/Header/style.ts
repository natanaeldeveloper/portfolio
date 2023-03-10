import { styled, css, getCssText } from '../../styles/stitches.config'

export const Container = styled('section', {
  width: '100%',
  height: '90vh',
  backgroundColor: '$dark100',
  display: 'flex',
})

export const TextArea = styled('div', {
  alignSelf: 'center',
  color: '$light100',

  paddingInline: '2rem',

  h1: {
    fontFamily: '$header',
    fontSize: '2rem',
  },

  h3: {
    fontFamily: '$caption',
    fontSize: '1rem',
    fontWeight: 500,
  },

  h4: {
    fontSize: '1rem',
    fontWeight: 500,
  },

  '@md': {
    h1: {
      fontSize: '2.5rem',
    },

    h3: {
      fontSize: '1.2rem',
    },

    h4: {
      fontSize: '1.2rem',
    }
  },

  '@lg': {
    paddingInline: '8rem',

    h1: {
      fontSize: '3.5rem',
    },

    h3: {
      fontSize: '1.5rem',
    },

    h4: {
      fontSize: '1.5rem',
    },
  }
})

export const ButtonArea = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  gap: 12,
  marginTop: 16,
})

export const Button = styled('button', {
  borderRadius: 4,
  fontFamily: '$caption',
  display: 'flex',
  flexFlow: 'row nowrap',
  gap: 8,
  alignItems: 'center',
  transition: '.3s',
  padding: '0.5rem 0.9rem',
  fontSize: '0.9rem',

  '@md': {
    padding: '0.7rem 1.1rem',
    fontSize: '1rem',
  }
})

export const ButtonBudget = css('button', {
  backgroundColor: '#128C7E',
  color: '$light100',
  border: '1px solid #128C7E',

  '&:hover': {
    backgroundColor: '#075E54',
    border: '1px solid #075E54',
    color: '$light100',
  }
})

export const ButtonJobOffer = css('button', {
  backgroundColor: 'transparent',
  color: '$light100',
  border: '1px solid $light100',

  '&:hover': {
    backgroundColor: '$primary',
    color: '$light100',
    border: '1px solid $primary',
  }
})