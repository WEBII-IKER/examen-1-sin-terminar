import React, { useState } from 'react';
import TrainerProfile from '../components/TrainerProfile';
import "../styles/trainer.css";

const Trainers = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);

  interface Trainer {
    name: string;
    lastName: string;
    gender: string;
    residence: string;
    photoUrl: string;
  }
  
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const gender = formData.get('gender') as string;
    const residence = formData.get('residence') as string;
    const photoUrl = formData.get('photoUrl') as string;

    // Validar que los campos requeridos no estén vacíos
    if (!name || !gender || !residence || !photoUrl) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Crear el nuevo perfil de entrenador
    const newTrainer: Trainer = {
      name: name,
      lastName: '', // Puedes modificar si deseas incluir un campo para apellido
      gender: gender,
      residence: residence,
      photoUrl: photoUrl
    };

    // Agregar el nuevo entrenador al estado
    setTrainers([...trainers, newTrainer]);
    
    // Limpiar el formulario después de agregar el entrenador
    event.currentTarget.reset();
  };

  return (
    <div>
      <h1>Entrenadores</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <label>
          Sexo:
          <input type="text" name="gender" />
        </label>
        <label>
          Lugar de residencia:
          <input type="text" name="residence" />
        </label>
        <label>
          URL de foto del entrenador:
          <input type="text" name="photoUrl" />
        </label>
        <button type="submit">Crear Perfil</button>
        <p></p>
      </form>

      <div className="trainers-container">
        {trainers.map((trainer, index) => (
          <TrainerProfile key={index} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default Trainers;