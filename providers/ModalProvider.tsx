"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

import useAuthModal from "@/hooks/useAuthModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

  return (
    <>
    <AuthModal />
    <UploadModal />
    </>
  )
}

export default ModalProvider