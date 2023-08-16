//!! Rutas GET, POST, PUT, DELETE

import { pool } from '../db.js';

//! Buscar Todos los Empleados

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM employee');
  res.json(rows);
};

//!Obtiene los empleados por ID

export const getEmployee = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM employee WHERE id = (?)', [
    req.params.id,
  ]);

  if (rows.length <= 0)
    return res.status(404).json({
      message: 'Empleado no encontrado',
    });

  res.json(rows[0]);
};

//! Crea los empleados

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    'INSERT INTO employee (name, salary) VALUES (?, ?)',
    [name, salary]
  );
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

//! Actualiza los empleados

export const updateEmployee = async (req, res) => {
  const [rows] = await pool.query('');
};

//! Elimina los empleados por ID

export const deleteEmployee = async (req, res) => {
  const [rows] = await pool.query('DELETE FROM employee WHERE id = (?)', [
    req.params.id,
  ]);

  if (rows.affectedRows <= 0) {
    return res.status(404).json({
      message: 'Employee not found',
    });
  }

  res.sendStatus(204);
};
