import React from 'react';

interface Trainer {
  photoUrl: string;
  name: string;
  lastName: string;
  gender: string;
  residence: string;
}

interface TrainerProfileProps {
  trainer: Trainer;
}

const TrainerProfile: React.FC<TrainerProfileProps> = ({ trainer }) => {
  return (
    <div className="trainer-profile">
      <img src={trainer.photoUrl} alt={`${trainer.name} ${trainer.lastName}`} />
      <h2>{trainer.name} {trainer.lastName}</h2>
      <p><strong>Sexo:</strong> {trainer.gender}</p>
      <p><strong>Residencia:</strong> {trainer.residence}</p>
    </div>
  );
};

export default TrainerProfile;