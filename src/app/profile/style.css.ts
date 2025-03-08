import { style } from '@vanilla-extract/css';

export const profileContainer = style({
  padding: '2rem',
  maxWidth: '800px',
  margin: '0 auto'
});

export const profileCard = style({
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
});

export const profileHeader = style({
  marginBottom: '2rem',
  borderBottom: '1px solid #eee',
  paddingBottom: '1rem'
});

export const logoutButton = style({
  padding: '0.5rem 1rem',
  backgroundColor: '#ff4444',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#cc0000'
  }
}); 