import React from 'react';

export default function Button({ label, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick} className="btn btn-primary">
      {label}
    </button>
  );
}
