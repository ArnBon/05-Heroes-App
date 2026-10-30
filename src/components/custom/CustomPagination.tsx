import {  MoreHorizontal } from 'lucide-react'
import { Button } from '../ui/button'

interface Props {
    totalPages: number;
}

export const CustomPagination = ({totalPages}: Props) => {
    const page = 1;

  return (
            <div className="flex items-center gap-2">
      {/* Botón Anterior */}
      <button 
        disabled={page === 1}
        className="btn"
      >
        Previous
      </button>

      {/* Generación dinámica de botones de página */}
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;
        const variant = page === pageNumber ? 'default' : 'outline';

        return (
          <button 
            key={index} 
            className={`btn ${variant}`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Botón Siguiente */}
      <button 
        disabled={page === totalPages}
        className="btn"
      >
        Next
      </button>
    </div>
  );
};