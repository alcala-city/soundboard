import axios from 'axios';

// Test
export async function simulateCall({ resolvePromise = true, time = 1000 }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolvePromise) resolve('Promesa resuelta con éxito');
      else reject('Promesa rechazada');
    }, time);
  });
}

// Login

export async function login() {
  return await axios.get(`${process.env.REACT_APP_API_URL}/login`);
}

// Audios

export async function addAudio(formData) {
  return await axios.post(`${process.env.REACT_APP_API_URL}/audio/create`, formData);
}

export async function getAudios() {
  return await axios.get(`${process.env.REACT_APP_API_URL}/audio`);
}

export async function playAudio(id, guildId, channelId, controller) {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/audio/play/${id}/guild/${guildId}/channel/${channelId}`,
    {
      signal: controller.signal,
    }
  );
}

export async function deleteAudio(id) {
  return await axios.delete(`${process.env.REACT_APP_API_URL}/audio/delete/${id}`);
}

// AUX
export async function getIp() {
  return await axios.get('https://api.ipify.org');
}
