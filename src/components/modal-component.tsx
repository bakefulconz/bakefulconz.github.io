import { Product } from "@/interfaces/product";
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

interface ModalProps {
  selectedProduct: Product | undefined;
  selectedImageIndex: number;
  onClose: () => void;
}

export default function ModalComponent({
  selectedProduct,
  selectedImageIndex,
  onClose,
}: ModalProps){
  return (
    selectedProduct && (
      <div id="outsideModal" className="fixed inset-0 flex justify-center items-center z-50 cursor-zoom-out bg-black/35" onClick={onClose}>
        <div className="max-w-screen-lg mx-4 cursor-default" onClick={event => event.stopPropagation()}>
          <div className="bg-white p-4">
            <div className="relative">
              <ImageGallery 
                items={[
                  {original: selectedProduct?.image || ''},
                  {original: selectedProduct?.image2 || ''}
                ]}
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={false}
                startIndex={selectedImageIndex}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};