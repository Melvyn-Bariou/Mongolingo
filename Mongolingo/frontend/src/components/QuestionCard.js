import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, Radio, RadioGroup, FormControlLabel,
  Button, List, ListItem, IconButton, Checkbox, FormGroup, Chip
} from '@mui/material';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// mélanger les questions
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

// le composant pour afficher une question
function QuestionCard({ question, onAnswer, disabled }) {
  const [selected, setSelected] = useState('');
  const [selectedMultiple, setSelectedMultiple] = useState([]);
  const niveauColors = ["default", "success", "info", "warning", "error"];
  const niveauLabels = ["", "Facile", "Intermédiaire", "Avancé", "Expert"];
  const [ordre, setOrdre] = useState(
    question.type === 'ordonner'
      ? shuffleArray(question.reponses.map(r => r.texte))
      : []
  );

  useEffect(() => {
    if (question.type === 'ordonner') {
      setOrdre(shuffleArray(question.reponses.map(r => r.texte)));
    }
    if (question.type === 'choix_multiple') {
      setSelectedMultiple([]);
    }
  }, [question]);

  const handleValidate = () => {
    if (question.type === 'choix_unique') {
      const correct = question.reponses.find(r => r.texte === selected)?.correcte;
      onAnswer(correct || false);
    } else if (question.type === 'choix_multiple') {
      const bonnes = question.reponses.filter(r => r.correcte).map(r => r.texte).sort();
      const user = selectedMultiple.sort();
      const correct = JSON.stringify(bonnes) === JSON.stringify(user);
      onAnswer(correct);
    } else if (question.type === 'ordonner') {
      const correct = JSON.stringify(ordre) === JSON.stringify(question.ordre_attendu);
      onAnswer(correct);
    } else if (question.type === 'complete_requete') {
      const correct = selected.trim() === JSON.stringify(question.requete_mongo_valide);
      onAnswer(correct);
    }
  };

  const handleDrag = (fromIdx, toIdx) => {
    const copy = [...ordre];
    const [moved] = copy.splice(fromIdx, 1);
    copy.splice(toIdx, 0, moved);
    setOrdre(copy);
  };

  // Fonction pour déplacer un élément vers le haut ou le bas (drag and drop)
  const moveItem = (fromIdx, toIdx) => {
    if (toIdx < 0 || toIdx >= ordre.length) return;
    const copy = [...ordre];
    const [moved] = copy.splice(fromIdx, 1);
    copy.splice(toIdx, 0, moved);
    setOrdre(copy);
  };

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
      <CardContent>
        <Typography variant="h6">{question.intitule}</Typography>
        <Chip
            label={`Niveau ${question.niveau} - ${niveauLabels[question.niveau]}`}
            color={niveauColors[question.niveau]}
            size="small"
            sx={{ ml: 2, fontWeight: 'bold' }}
        />

        {/* Affichage si question de type choix unique */}
        {question.type === 'choix_unique' && (
          <RadioGroup value={selected} onChange={e => setSelected(e.target.value)}>
            {question.reponses.map((rep, idx) => (
              <FormControlLabel
                key={idx}
                value={rep.texte}
                control={<Radio />}
                label={rep.texte}
                disabled={disabled}
              />
            ))}
          </RadioGroup>
        )}

        {/* Affichage si question de type choix multiple */}
        {question.type === 'choix_multiple' && (
          <FormGroup>
            {question.reponses.map((rep, idx) => (
              <FormControlLabel
                key={idx}
                control={
                  <Checkbox
                    checked={selectedMultiple.includes(rep.texte)}
                    onChange={e => {
                      if (e.target.checked) {
                        setSelectedMultiple([...selectedMultiple, rep.texte]);
                      } else {
                        setSelectedMultiple(selectedMultiple.filter(t => t !== rep.texte));
                      }
                    }}
                    disabled={disabled}
                  />
                }
                label={rep.texte}
              />
            ))}
          </FormGroup>
        )}

        {/* Affichage si question de type ordonner */}
        {question.type === 'ordonner' && (
          <DragDropContext
            onDragEnd={result => {
              if (!result.destination) return;
              const copy = Array.from(ordre);
              const [removed] = copy.splice(result.source.index, 1);
              copy.splice(result.destination.index, 0, removed);
              setOrdre(copy);
            }}
          >
            {/* Element drag and drop pour les propositions */}
            <Droppable droppableId="ordre-list">
              {(provided) => (
                <List
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  sx={{ background: '#f5f5f5', borderRadius: 2, p: 1 }}
                >
                  {ordre.map((step, idx) => (
                    <Draggable key={step} draggableId={step} index={idx}>
                      {(provided, snapshot) => (
                        <ListItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          sx={{
                            mb: 1,
                            background: snapshot.isDragging ? '#e3f2fd' : '#fff',
                            borderRadius: 1,
                            boxShadow: snapshot.isDragging ? 3 : 1,
                          }}
                          secondaryAction={
                            <span>
                              <IconButton
                                size="small"
                                onClick={() => moveItem(idx, idx - 1)}
                                disabled={disabled || idx === 0}
                                aria-label="Monter"
                              >
                                <ArrowUpwardIcon />
                              </IconButton>
                              <IconButton
                                size="small"
                                onClick={() => moveItem(idx, idx + 1)}
                                disabled={disabled || idx === ordre.length - 1}
                                aria-label="Descendre"
                              >
                                <ArrowDownwardIcon />
                              </IconButton>
                            </span>
                          }
                        >
                          <Typography sx={{ mr: 2 }}>{idx + 1}.</Typography>
                          <Typography sx={{ flexGrow: 1 }}>{step}</Typography>
                        </ListItem>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              )}
            </Droppable>
          </DragDropContext>
        )}

        {!disabled && (
          <Button variant="contained" onClick={handleValidate} sx={{ mt: 2 }}>
            Valider
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default QuestionCard;
