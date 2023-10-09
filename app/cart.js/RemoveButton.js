'use client';
import { handleButtonClick } from './actions';

export default function RemoveButton({ id }) {
  return (
    <form>
      <button
        className="removeButton"
        formAction={async () => await handleButtonClick(id)}
      >
        Remove Item
      </button>
    </form>
  );
}
