'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UIContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalContent: ReactNode | null;
  setModalContent: (content: ReactNode) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <UIContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        modalContent,
        setModalContent,
      }}
    >
      {children}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-2xl max-w-lg w-full m-4 animate-in zoom-in-95 duration-300">
            {modalContent}
            <button
              onClick={closeModal}
              className="mt-6 w-full py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
