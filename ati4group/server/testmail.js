const mailOptions = {
    from: 'votre_adresse_email@gmail.com',
    to: 'adresse_email_destinataire@example.com',
    subject: 'Sujet de l\'e-mail avec QR code',
    html: `
      <h1>Titre du message</h1>
      <p>Contenu du message.</p>
      <img src="${qrDataURL}" alt="QR Code"> <!-- Afficher le QR code dans l'e-mail -->
    `,
    attachments: [{
        filename: 'qrcode.png', // Nom de la pièce jointe
        content: qrDataURL.split('base64,')[1], // Contenu du QR code en base64
        encoding: 'base64',
    }],
};