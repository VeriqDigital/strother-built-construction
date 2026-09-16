"use client";
import Button from "@/components/ui/Button";
import Arrow from "@/components/ui/Arrow";
import LeadModal from "./LeadModal";
import useLeadModal from "./useLeadModal";
export default function ProjectInquiry({
  compact = false,
}: {
  compact?: boolean;
}) {
  const modal = useLeadModal();
  return (
    <>
      <Button
        onClick={() => modal.openModal("service")}
        className={compact ? "button-compact" : ""}
      >
        Start Your Project <Arrow />
      </Button>
      {modal.activeModal && (
        <LeadModal
          activeModal={modal.activeModal}
          hasSubmitted={modal.hasSubmitted}
          isSubmitting={modal.isSubmitting}
          onClose={modal.closeModal}
          onSubmit={modal.handleFormSubmit}
          submitError={modal.submitError}
        />
      )}
    </>
  );
}
