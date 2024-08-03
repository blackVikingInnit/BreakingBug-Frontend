import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ButtonHaver = ({ row }) => {
  const handleEdit = () => {
    console.log('Edit row:', row);
  };

  const handleDelete = () => {
    // Handle delete action
    console.log('Delete row:', row);
  };

  return (
    <div>
      <IconButton onClick={handleEdit} color="primary">
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete} color="secondary">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default ButtonHaver;
