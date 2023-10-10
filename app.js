const express = require('express');
const app = express();
const usuarios = require('./usuarios')
app.set('views', './views');

app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/miportafolio/:id', (req, res) => {
  const userId = req.params.id;
  currentUser = usuarios[userId]
  res.render('index.ejs', {userId:userId, nombre: currentUser.nombre, descripcion: currentUser.descripcion });
});
app.get('/miportafolio/:id/skills', (req, res) => {
  const userId = req.params.id;
  currentUser = usuarios[userId]
  res.render('skills.ejs',{ userId:userId, especialidad:currentUser.especialidad, conocimientos: currentUser.conocimientos })
});
app.get('/miportafolio/:id/contact', (req, res) => {
  const userId = req.params.id;
  currentUser = usuarios[userId]
  res.render('contact.ejs',{ userId:userId, contacto:currentUser.contacto })
})
// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
