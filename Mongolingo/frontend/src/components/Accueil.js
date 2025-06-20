import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';

export default function Accueil({ onStart, gameMode, setGameMode }) {
  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" sx={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)' }}>
      <Paper elevation={6} sx={{ p: 5, maxWidth: 480, borderRadius: 4 }}>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <img
            src="/logo_Mongolingo_removebg.png"
            alt="Mongolingo logo"
            style={{ height: 48, marginRight: 12 }}
          />
          <Typography variant="h3" fontWeight="bold">Mongolingo</Typography>
        </Box>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <b>Bienvenue sur Mongolingo !</b><br />
          Teste tes connaissances sur MongoDB à travers différents modes de jeu.<br /><br />
          <b>Consignes :</b>
          <ul>
            <li>Lis la question et réponds.</li>
            <li>Découvre l'explication après chaque réponse.</li>
            <li>Tente d'obtenir le meilleur score possible !</li>
          </ul>
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Choisis ton mode de jeu :</Typography>
        <Box display="flex" justifyContent="center" gap={2} mb={3}>
          <Button
            variant={gameMode === 'classic' ? "contained" : "outlined"}
            startIcon={<EmojiEventsIcon />}
            onClick={() => setGameMode('classic')}
          >
            Classique
          </Button>
          <Button
            variant={gameMode === 'chrono' ? "contained" : "outlined"}
            startIcon={<SportsSoccerIcon />}
            onClick={() => setGameMode('chrono')}
            disabled
          >
            Chrono
          </Button>
          <Button
            variant={gameMode === 'training' ? "contained" : "outlined"}
            startIcon={<SchoolIcon />}
            onClick={() => setGameMode('training')}
            disabled
          >
            Entraînement
          </Button>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            size="large"
            onClick={onStart}
            sx={{ fontWeight: 'bold', px: 4 }}
          >
            Commencer
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}