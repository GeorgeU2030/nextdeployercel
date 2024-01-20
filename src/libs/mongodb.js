import mongoose from 'mongoose';

export async function connectdb() {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error('La variable de entorno MONGODB_URI no está configurada.');
    }

    await mongoose.connect(uri);
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
  }
}
