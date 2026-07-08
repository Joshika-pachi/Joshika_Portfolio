import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const contacts = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: <GitHubIcon />,
    text: 'github.com/joshika',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <LinkedInIcon />,
    text: 'linkedin.com/in/joshika',
  },
  {
    label: 'Email',
    href: 'mailto:hello@joshika.dev',
    icon: <EmailIcon />,
    text: 'hello@joshika.dev',
  },
];

function Contact() {
  return (
    <Box id="contact" className="section" sx={{ background: '#FFFFFF', pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="md" className="section-inner">
        <Typography variant="h2" className="section-title">
          Contact
        </Typography>

        <Typography sx={{ fontSize: '1.05rem', color: '#1F2937', mb: 4, lineHeight: 1.7 }}>
          Currently debugging... probably something. If you'd like to talk about code, research, or a project, feel free to reach out.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {contacts.map((contact) => (
            <Button
              key={contact.label}
              href={contact.href}
              target={contact.label !== 'Email' ? '_blank' : undefined}
              rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="fade-in"
              sx={{
                justifyContent: 'flex-start',
                textTransform: 'none',
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                color: '#1F2937',
                background: '#FCFCFC',
                border: '1px solid #E5E7EB',
                borderRadius: '10px',
                p: 2,
                gap: 2,
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(31, 41, 55, 0.08)',
                  borderColor: '#3B82F6',
                  background: '#FCFCFC',
                },
              }}
            >
              <Box sx={{ color: '#3B82F6' }}>{contact.icon}</Box>
              <Box sx={{ textAlign: 'left' }}>
                <Typography
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#6B7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {contact.label}
                </Typography>
                <Typography sx={{ color: '#1F2937', fontWeight: 500 }}>
                  {contact.text}
                </Typography>
              </Box>
            </Button>
          ))}
        </Box>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography sx={{ fontSize: '0.8rem', color: '#6B7280', fontFamily: "'IBM Plex Mono', monospace" }}>
            Built with care, probably between debugging sessions.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
