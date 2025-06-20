import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Box, Alert, Modal, Paper, MenuItem, Select, InputLabel, FormControl, Snackbar} from '@mui/material';
import QuestionCard from './components/QuestionCard';
import Accueil from './components/Accueil';
import CollectionSchemaViewer from './components/CollectionSchemaViewer';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';

function App() {
  // États pour gérer les questions, les réponses, les scores, etc...
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showExplication, setShowExplication] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [lastCorrect, setLastCorrect] = useState(null);
  const [exportFormat, setExportFormat] = useState('');
  const [importFormat, setImportFormat] = useState('');
  const [importFile, setImportFile] = useState(null);
  const [exportSuccess, setExportSuccess] = useState('');
  const [executionResult, setExecutionResult] = useState(null);
  const [showAccueil, setShowAccueil] = useState(true);
  const [gameMode, setGameMode] = useState('classic');
  const [allQuestions, setAllQuestions] = useState([]);

  // Fonction pour récupérer une question aléatoire
  const fetchRandomQuestion = () => {
    fetch('http://localhost:3001/api/questions')
      .then(res => res.json())
      .then(data => {
        const random = data[Math.floor(Math.random() * data.length)];
        setCurrentQuestion(random);
        setShowExplication(false);
        setLastCorrect(null);
      });
  };

  // Utilisation de useEffect pour charger une question lorsque l'accueil est masqué
  useEffect(() => {
    if (!showAccueil) fetchRandomQuestion();
    // eslint-disable-next-line
  }, [showAccueil]);

  // Gestion des réponses aux questions
  const handleAnswer = async (isCorrect) => {
    setAnsweredCount(prev => prev + 1);
    setLastCorrect(isCorrect);
    setShowExplication(true);

    if (isCorrect) setScore(prev => prev + 1);

    // Exécution réelle si la réponse est correcte et qu'il y a une opération Mongo
    if (isCorrect && currentQuestion.operation_mongo && currentQuestion.operation_mongo.operation !== "none") {
      try {
        const res = await fetch('http://localhost:3001/api/questions/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            operation: currentQuestion.operation_mongo.operation,
            collection: currentQuestion.operation_mongo.collection,
            userQuery: currentQuestion.operation_mongo.query,
            userDocument: currentQuestion.operation_mongo.document,
            userUpdate: currentQuestion.operation_mongo.update,
            userFilter: currentQuestion.operation_mongo.filter,
            userPipeline: currentQuestion.operation_mongo.pipeline
          })
        });
        const data = await res.json();
        setExecutionResult(data.result || data.error || null);
      } catch (e) {
        setExecutionResult("Erreur lors de l'exécution.");
      }
    } else {
      setExecutionResult(null);
    }
  };

  // Question suivante
  const handleNext = () => {
    if (answeredCount < 20) {
      fetchRandomQuestion();
    } else {
      setCurrentQuestion(null);
    }
  };

  // Redémarrer le quiz
  const handleRestart = () => {
    setScore(0);
    setAnsweredCount(0);
    setShowExplication(false);
    setLastCorrect(null);
    fetchRandomQuestion();
  };

  // Gestion de l'export
  const handleExport = async (format) => {
    if (!format) return;
    const url = `http://localhost:3001/api/backup/export/${format}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Erreur export');
      
      setExportSuccess(`Export ${format.toUpperCase()} réussi !`);
    } catch (e) {
      alert('Erreur lors de l’export');
    }
    setExportFormat('');
  };

  // Import handler
  const handleImport = async (format) => {
    if (!format || !importFile) return;

    if (format === "json") {
      // Lire le fichier et envoyer le contenu JSON
      const text = await importFile.text();
      const data = JSON.parse(text);
      try {
        const res = await fetch('http://localhost:3001/api/backup/import/json', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error('Erreur import');
        setExportSuccess(`Import ${format.toUpperCase()} réussi !`);
      } catch (e) {
        alert('Erreur lors de l’import');
      }
      setImportFormat('');
      setImportFile(null);
      return;
    } else {
      // BSON (binaire pur)
      const url = 'http://localhost:3001/api/backup/import/bson';
      try {
        const arrayBuffer = await importFile.arrayBuffer();
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/octet-stream' },
          body: arrayBuffer,
        });
        if (!res.ok) throw new Error('Erreur import');
        setExportSuccess(`Import ${format.toUpperCase()} réussi !`);
      } catch (e) {
        alert('Erreur lors de l’import');
      }
      setImportFormat('');
      setImportFile(null);
    }
  };

  // Affichage de l'écran d'accueil
  if (showAccueil) {
    return (
      <Accueil
        onStart={() => setShowAccueil(false)}
        gameMode={gameMode}
        setGameMode={setGameMode}
      />
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 4, backgroundColor: '#ffffffcc', backdropFilter: 'blur(4px)', mt: 4 }}>
      <Container maxWidth="sm">
        {/* Page d'accueil / modale */}
        
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <img
            src="/logo_Mongolingo_removebg.png"
            alt="Mongolingo logo"
            style={{ height: 48, marginRight: 12 }}
          />
          <Typography variant="h3" fontWeight="bold">Mongolingo</Typography>
        </Box>
        <Typography variant="h6">Score : {score} / {answeredCount}</Typography>

        {/* Une partie en 10 questions */}
        {currentQuestion && answeredCount < 10 ? (
          <>

            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ my: 2 }}>

              {/* Export */}
              <Paper elevation={1} sx={{ p: 2, borderRadius: 3, boxShadow: 3, backgroundColor: '#fafafa', mb: 2 }}>
                <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center" gap={2}>
                  
                  <FormControl sx={{ minWidth: 140 }}>
                    <InputLabel id="export-label"><DownloadIcon sx={{ mr: 1, mb: '-4px' }}/>Exporter</InputLabel>
                    <Select
                      labelId="export-label"
                      value={exportFormat}
                      label="Exporter"
                      onChange={e => {
                        setExportFormat(e.target.value);
                        handleExport(e.target.value);
                      }}
                    >
                      <MenuItem value="json">JSON</MenuItem>
                      <MenuItem value="bson">BSON</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Import */}
                  <FormControl sx={{ minWidth: 140 }}>
                    <InputLabel id="import-label"><UploadIcon sx={{ mr: 1, mb: '-4px' }}/>Importer</InputLabel>
                    <Select
                      labelId="import-label"
                      value={importFormat}
                      label="Importer"
                      onChange={e => setImportFormat(e.target.value)}
                    >
                      <MenuItem value="json">JSON</MenuItem>
                      <MenuItem value="bson">BSON</MenuItem>
                    </Select>
                  </FormControl>
                  <input
                    type="file"
                    accept={importFormat === 'json' ? '.json' : importFormat === 'bson' ? '.bson,.zip,.tar' : '*'}
                    style={{ display: 'none' }}
                    id="import-file"
                    onChange={e => setImportFile(e.target.files[0])}
                  />
                  <label htmlFor="import-file">
                    <Button variant="outlined" component="span" sx={{ ml: 2 }}>
                      Choisir un fichier
                    </Button>
                  </label>
                  <Button
                    variant="contained"
                    disabled={!importFormat || !importFile}
                    onClick={() => handleImport(importFormat)}
                    sx={{ ml: 1 }}
                  >
                    Importer
                  </Button>

                </Box>
              </Paper>
            </Box>

            <CollectionSchemaViewer collection={currentQuestion.collection_cible} />
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              disabled={showExplication}
            />
            {showExplication && (
              <Box mt={2}>
                {lastCorrect === true && (
                  <Alert severity="success" sx={{ mb: 2 }}>
                    Bonne réponse ! 🎉
                  </Alert>
                )}
                {lastCorrect === false && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    Mauvaise réponse.
                  </Alert>
                )}
                <Typography variant="body1">
                  <strong>Explication :</strong> {currentQuestion.explication}
                </Typography>

                {executionResult && (
                  <Box mt={2}>
                    <Typography variant="subtitle1"><strong>Résultat de la requête :</strong></Typography>
                    <Paper sx={{ p: 2, mt: 1, maxHeight: 300, overflow: 'auto', background: '#f7f7f7' }}>
                      <pre style={{ margin: 0, fontSize: 14 }}>
                        {typeof executionResult === 'string'
                          ? executionResult
                          : JSON.stringify(executionResult, null, 2)}
                      </pre>
                    </Paper>
                  </Box>
                )}

                <Button onClick={handleNext} variant="contained" sx={{ mt: 2 }}>
                  {answeredCount < 19 ? "Nouvelle question" : "Voir le résultat"}
                </Button>
              </Box>
            )}
          </>
        ) : (
          !showAccueil && (
            <Box mt={4}>
              <Typography variant="h5" align="center" gutterBottom>
                🎉 Quiz terminé !
              </Typography>
              <Typography variant="h6" align="center">
                Score final : {score} / {answeredCount}
              </Typography>
              <Button
                variant="contained"
                onClick={handleRestart}
                sx={{
                  backgroundColor: '#1976d2',
                  color: 'white',
                  ':hover': { backgroundColor: '#115293' },
                  px: 3,
                  py: 1,
                  borderRadius: 2
                }}
              >
                Recommencer
              </Button>
            </Box>
          )
        )}
      </Container>
      <Snackbar
        open={!!exportSuccess}
        autoHideDuration={3000}
        onClose={() => setExportSuccess('')}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setExportSuccess('')} severity="success" sx={{ width: '100%' }}>
          {exportSuccess}
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default App;