import React, { useState, FormEvent } from 'react';

interface CreateShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateShop: (shopData: { name: string; description: string }) => void;
}

const CreateShopModal: React.FC<CreateShopModalProps> = ({
  isOpen,
  onClose,
  onCreateShop
}) => {
  const [name, setShopName] = useState<string>('');
  const [description, setShopDescription] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate inputs
    if (!name.trim() || !description.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Call the create shop function passed as prop
    onCreateShop({
      name,
      description
    });

    // Reset form and close modal
    setShopName('');
    setShopDescription('');
    onClose();
  };

  return (
    <dialog id="create_shop_modal" className="modal bg-slate-500" open={isOpen}>
      <div className="modal-box bg-white text-black shadow-md">
        <h3 className="font-bold text-lg text-center text-CustomGreen-500">Create Your Shop</h3>
        <form onSubmit={handleSubmit} className="py-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black">Shop Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter shop name"
              className="input input-bordered w-full bg-white text-black border-none ring-1 focus:outline-CustomGreen-500 rounded-full"
              value={name}
              onChange={(e) => setShopName(e.target.value)}
              required
            />
          </div>

          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text text-black">Shop Description</span>
            </label>
            <input
              className="input input-bordered w-full bg-white text-black border-none ring-1 focus:outline-CustomGreen-500 rounded-full"
              placeholder="Describe your shop"
              value={description}
              onChange={(e) => setShopDescription(e.target.value)}
              required
            />
          </div>

          <div className="modal-action">
            <button
              type="button"
              className="btn btn-ghost hover:bg-red-500 bg-red-600 text-white"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn border-none hover:bg-green-500 bg-green-700 text-white"
            >
              Create Shop
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default CreateShopModal;