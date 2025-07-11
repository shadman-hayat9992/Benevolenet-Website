import { Router } from 'express';
import {
  AddContact,
  GetContacts,
  GetContactById,
  UpdateContact,
  DeleteContact,
} from '../Controller/ContactController.js';
import SendMail from '../Controller/SendMail.js';

const ContactRouter = Router();

// Get all contacts
ContactRouter.get('/contact', GetContacts);

//For mail
ContactRouter.get('/mail', SendMail);

// Get contact by ID
ContactRouter.get('/contact/:id', GetContactById);

// Add a new contact
ContactRouter.post('/contact', AddContact);

// Update contact by ID
ContactRouter.put('/contact/:id', UpdateContact);

// Delete contact by ID
ContactRouter.delete('/contact/:id', DeleteContact);

export default ContactRouter;
