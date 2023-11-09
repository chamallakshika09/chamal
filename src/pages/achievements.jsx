import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Box, Modal } from '@mui/material';
import Header from 'components/header';
import { achievementsData } from 'data';

export const Achievements = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleOpenModal = (achievement) => {
    setSelectedAchievement(achievement);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <Box>
      <Header />
      <Grid container spacing={2} sx={{ padding: '1rem' }}>
        {achievementsData.map((achievement) => (
          <Grid item xs={12} sm={6} md={4} key={achievement.id}>
            <Card sx={{ maxWidth: 345, cursor: 'pointer' }} onClick={() => handleOpenModal(achievement)}>
              <CardMedia
                component="img"
                image={achievement.image}
                alt={achievement.title}
                sx={{ width: 'auto', height: '200px' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {achievement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {achievement.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for displaying badges or certificates */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="achievement-modal-title"
        aria-describedby="achievement-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            maxWidth: '90vw',
          }}
        >
          {selectedAchievement && (
            <>
              <Typography id="achievement-modal-title" variant="h6" component="h2">
                {selectedAchievement.title}
              </Typography>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 'auto',
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="Achievement badge"
                src={selectedAchievement.badge}
              />
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};
