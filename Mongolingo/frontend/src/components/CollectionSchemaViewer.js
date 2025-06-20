// src/components/CollectionSchemaViewer.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Card } from '@mui/material';

// Composant pour visualiser la collection sur laquelle porte la question?
function CollectionSchemaViewer({ collection }) {
  const [schemaText, setSchemaText] = useState('');

  useEffect(() => {
    if (!collection) return;

    fetch(`http://localhost:3001/api/questions/schema-dynamic/${collection}`)
      .then(res => res.text())
      .then(data => setSchemaText(data))
      .catch(() => setSchemaText('// Erreur de chargement du schéma'));
  }, [collection]);

  if (!schemaText) return null;

  return (
    <Card
      variant="outlined"
      sx={{
        my: 3,
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: '#ffffff',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Structure de la collection <strong>{collection}</strong> :
        </Typography>

        <Paper
          elevation={1}
          sx={{
            p: 2,
            whiteSpace: 'pre-wrap',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            borderRadius: 2,
            backgroundColor: '#f9f9f9',
            border: '1px solid #e0e0e0',
          }}
        >
          {schemaText}
        </Paper>
      </Box>
    </Card>
  );
}

export default CollectionSchemaViewer;
