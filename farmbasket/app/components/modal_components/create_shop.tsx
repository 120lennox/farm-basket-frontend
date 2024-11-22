import React, { useState } from 'react';

const CreateShopModal = ({ isOpen, onClose, onCreateShop }) => {
  const [shopName, setShopName] = useState('');
  const [shopDescription, setShopDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (!shopName.trim() || !shopDescription.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Call the create shop function passed as prop
    onCreateShop({ 
      shopName, 
      shopDescription 
    });

    // Reset form and close modal
    setShopName('');
    setShopDescription('');
    onClose();
  };

  return (
    <dialog id="create_shop_modal" className="modal" open={isOpen}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Create Your Shop</h3>
        <form onSubmit={handleSubmit} className="py-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Shop Name</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter shop name" 
              className="input input-bordered w-full" 
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              required 
            />
          </div>
          
          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text">Shop Description</span>
            </label>
            <textarea 
              className="textarea textarea-bordered h-24" 
              placeholder="Describe your shop"
              value={shopDescription}
              onChange={(e) => setShopDescription(e.target.value)}
              required
            ></textarea>
          </div>
          
          <div className="modal-action">
            <button 
              type="button" 
              className="btn btn-ghost" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
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