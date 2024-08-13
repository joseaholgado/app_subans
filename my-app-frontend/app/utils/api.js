// import axios from 'axios'

// // Función para enviar datos a la API
// export const post_user = async (userInfo) => {
//     try {
//         const response = await axios.post('http://localhost:3000/users', userInfo);
//         return response.data

//     } catch (error) {
//         console.log(userInfo)
//         console.error('Error al realizar la petición:', error);
//         throw error; // Lanza el error para manejarlo en el componente
//     }
// };
export const post_user = async (userInfo) => {
    try {
        const response = await fetch('http://<tu_IP_local>:3000/users', { // Reemplaza <tu_IP_local> con la IP correcta
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al realizar la petición:', error);
        throw error;
    }
};
