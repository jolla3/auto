
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link
} from '@mui/material';

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#1a237e', color: '#fff', py: 6, px: 3 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* About Us */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom align="center">ℹ️ About Us</Typography>
            <Typography variant="body2" paragraph align="center">
              📍 Located just 5 km from Nairobi's heart, our hub is a gateway to major city spots and JKIA Airport via the Nairobi Expressway.
            </Typography>
            <Typography variant="body2" paragraph align="center">
              🎯 Our mission: To blend innovation, quality, and reliability in everything we offer.
            </Typography>
            <Typography variant="body2" align="center">
              🤝 We look forward to working with you — let's grow together.
            </Typography>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom align="center">📬 Get in Touch</Typography>
            <Typography variant="body2" paragraph align="center">
              📧 <Link href="mailto:jmweng574@gmail.com" underline="hover" color="inherit">
                jmweng574@gmail.com
              </Link>
            </Typography>
            <TextField
              label="📨 Your Email"
              variant="filled"
              fullWidth
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
            />
            <TextField
              label="✍️ Message"
              multiline
              rows={4}
              variant="filled"
              fullWidth
              sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
            />
            <Button variant="contained" color="secondary" fullWidth>
              🚀 Send Message
            </Button>
          </Grid>

          {/* Socials */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom align="center">📱 Stay Connected</Typography>
            <Typography variant="body2" paragraph align="center">
              Follow us to stay updated:
            </Typography>
            <Typography align="center" fontSize="1.4rem">
              <Link href="https://facebook.com" color="inherit" underline="none">👍 Facebook</Link><br />
              <Link href="https://instagram.com" color="inherit" underline="none">📸 Instagram</Link><br />
              <Link href="https://x.com" color="inherit" underline="none">🐦 X (Twitter)</Link>
            </Typography>
            <Typography variant="body2" align="center" mt={2}>
              🌟 Join our journey!
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Footer */}
      <Box sx={{ backgroundColor: '#0d47a1', py: 2, textAlign: 'center', color: '#fff' }}>
        <Typography variant="body2">
          🛠️ Crafted with care by John Muriuki • &copy; {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;



