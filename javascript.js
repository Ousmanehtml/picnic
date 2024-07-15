document.getElementById('participantsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nbParticipants = document.getElementById('nbParticipants').value;
    const namesContainer = document.getElementById('namesContainer');

    namesContainer.innerHTML = '';

    for (let i = 0; i < nbParticipants; i++) {
        const nameField = document.createElement('div');
        nameField.innerHTML = `
            <h3>Participant ${i + 1}</h3>
            <p>
                <label for="nom${i}">Nom :</label>
                <input type="text" id="nom${i}" required>
            </p>
            <p>
                <label for="prenom${i}">Prénom :</label>
                <input type="text" id="prenom${i}" required>
            </p>
        `;
        namesContainer.appendChild(nameField);
    }

    document.getElementById('participantsForm').style.display = 'none';
    document.getElementById('namesForm').style.display = 'block';
});

document.getElementById('namesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nbParticipants = document.getElementById('nbParticipants').value;
    const colors = ['Rouge', 'Orange', 'Jaune', 'Vert', 'Bleu', 'Indigo', 'Violet'];
    const participants = [];

    for (let i = 0; i < nbParticipants; i++) {
        const nom = document.getElementById(`nom${i}`).value;
        const prenom = document.getElementById(`prenom${i}`).value;
        participants.push({ nom, prenom });
    }

    const result = document.getElementById('result');
    result.innerHTML = '';

    for (let i = 0; i < participants.length; i += 2) {
        const groupColor = colors[i / 2 % colors.length];
        const participantDiv = document.createElement('div');
        participantDiv.style.backgroundColor = groupColor;
        participantDiv.style.padding = '10px';
        participantDiv.style.margin = '10px 0';
        participantDiv.style.borderRadius = '5px';

        let groupText = `Groupe de couleur ${groupColor} :<br>`;
        groupText += `Participant 1: ${participants[i].prenom} ${participants[i].nom}<br>`;

        if (participants[i + 1]) {
            groupText += `Participant 2: ${participants[i + 1].prenom} ${participants[i + 1].nom}`;
        } else {
            groupText += `Participant 2: -`;
        }

        participantDiv.innerHTML = groupText;
        result.appendChild(participantDiv);
    }

    document.getElementById('namesForm').style.display = 'none';
    document.getElementById('finalActions').style.display = 'block';
});

document.getElementById('backButton').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('namesForm').style.display = 'none';
    document.getElementById('participantsForm').style.display = 'block';
    document.getElementById('result').innerHTML = '';
});

document.getElementById('mainMenuButton').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('finalActions').style.display = 'none';
    document.getElementById('participantsForm').style.display = 'block';
    document.getElementById('result').innerHTML = '';
    document.getElementById('namesForm').reset();
    document.getElementById('participantsForm').reset();
});

document.getElementById('quitButton').addEventListener('click', function() {
    window.close();
});
