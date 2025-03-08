import { style, globalStyle } from '@vanilla-extract/css';

export const loginContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '20px',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#1a1a1a'
    }
  }
});

export const loginForm = style({
  width: '100%',
  maxWidth: '400px',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#2d2d2d',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      color: '#ffffff'
    }
  }
});

export const inputGroup = style({
  marginBottom: '1rem'
});

export const input = style({
  width: '100%',
  padding: '0.75rem',
  borderRadius: '4px',
  border: '1px solid #ddd',
  marginTop: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#404040',
      border: '1px solid #404040',
      color: '#ffffff'
    }
  }
});

export const button = style({
  width: '100%',
  padding: '0.75rem',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#0051cc'
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#0070f3',
      ':hover': {
        backgroundColor: '#0051cc'
      }
    }
  }
});
