import React from "react";
import Image from "next/image";

interface ModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

export default function ModalComponent({
  selectedImage,
  onClose,
}: ModalProps){
  return (
    selectedImage && (
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/35 cursor-zoom-out" onClick={() => onClose()}>
        <div className="max-w-screen-lg mx-4">
          <div className="bg-white p-4">
            <div className="relative">
              <Image src={selectedImage} alt="Selected Image" width={500} height={500} onClick={() => onClose()} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};