import { db } from "../DBconnection/ContactDB.js"; // PostgreSQL connection

const AddContact = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    service,
    budget,
    message,
    newsletter,
  } = req.body;

  const newsletterBool = newsletter === 'true' || newsletter === true || newsletter === 'on';

  try {
    const query = `
      INSERT INTO "Contact" 
      (firstName, lastName, email, phone, company, service, budget, message, newsletter)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
    `;

    const values = [
      firstName,
      lastName,
      email,
      phone,
      company,
      service,
      budget,
      message,
      newsletterBool,
    ];

    const result = await db.query(query, values);

    res.status(200).json({
      message: "Contact added successfully",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to add contact",
      details: error,
    });
  }
};


//GET API
const GetContacts = async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM "Contact" ORDER BY id DESC`);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch contacts",
      details: error,
    });
  }
};

//GET API by id
const GetContactById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(`SELECT * FROM "Contact" WHERE id = $1`, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch contact",
      details: error,
    });
  }
};

//PUT API
const UpdateContact = async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    service,
    budget,
    message,
    newsletter,
  } = req.body;

  const newsletterBool = newsletter === 'true' || newsletter === true || newsletter === 'on';

  try {
    const query = `
      UPDATE "Contact" SET 
        firstName = $1,
        lastName = $2,
        email = $3,
        phone = $4,
        company = $5,
        service = $6,
        budget = $7,
        message = $8,
        newsletter = $9,
        updatedAt = CURRENT_TIMESTAMP
      WHERE id = $10
      RETURNING *;
    `;

    const values = [
      firstName,
      lastName,
      email,
      phone,
      company,
      service,
      budget,
      message,
      newsletterBool,
      id,
    ];

    const result = await db.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Contact not found for update" });
    }

    res.status(200).json({
      message: "Contact updated successfully",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to update contact",
      details: error,
    });
  }
};

//DELETE API
const DeleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(`DELETE FROM "Contact" WHERE id = $1 RETURNING *`, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Contact not found for deletion" });
    }

    res.status(200).json({
      message: "Contact deleted successfully",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete contact",
      details: error,
    });
  }
};


export {
  AddContact,
  GetContacts,
  GetContactById,
  UpdateContact,
  DeleteContact,
};

