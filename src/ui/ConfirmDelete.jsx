function ConfirmDelete({ resourceName, onClose, onConfirm, disabled }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">
        آیا از حذف {resourceName} مطمئن هستید؟
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <button
          className="btn btn--danger flex-1  py-3"
          onClick={onClose}
          disabled={disabled}
        >
          لغو
        </button>
        <button
          className="btn btn--primary flex-1"
          onClick={onConfirm}
          disabled={disabled}
        >
          تائید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
