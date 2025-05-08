export const getPokimon = async () => {
    try {
        const response = await fetch('https://imhere.space:5680/api/auth/count/pokimon', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Could not fetch pokimon');
        }

        const data = await response.json();
        console.log('Получен покемон:', data);
        return data; // Тут возвращается JSON
    } catch (error) {
        console.error('Ошибка при получении покемона:', error);
        return null;
    }
};

export const addPokimon = async () => {
    try {
        const response = await fetch('https://imhere.space:5680/api/auth/add/pokimon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Could not add pokimon');
        }

        const data = await response.json();
        console.log('Покемон успешно добавлен:', data);
        return data; // JSON с message
    } catch (error) {
        console.error('Ошибка при добавлении покемона:', error);
        return null;
    }
};
