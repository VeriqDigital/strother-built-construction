"use client";
import { useEffect, useRef } from "react";
import type { FormEvent } from "react";
import InquiryForm from "./InquiryForm";
export type ModalType = "service" | "contact";
type Props = {
  activeModal: ModalType;
  hasSubmitted: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitError: string;
};
export default function LeadModal({ hasSubmitted, onClose, onSubmit }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      previousFocus?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="lead-dialog"
      aria-labelledby="inquiry-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="dialog-inner">
        <button
          type="button"
          className="dialog-close"
          aria-label="Close project inquiry"
          onClick={onClose}
        >
          ×
        </button>
        <p className="eyebrow">Strother Built Construction</p>
        <h2 id="inquiry-title">Tell us what you have in mind.</h2>
        <InquiryForm onSubmit={onSubmit} hasSubmitted={hasSubmitted} />
      </div>
    </dialog>
  );
}
