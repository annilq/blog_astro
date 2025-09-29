import { useState } from "react";
import {
  Modal,
  ModalClose,
  ModalDialog,
  ModalOverflow,
  Typography,
} from "@mui/joy";
import type { Book } from "../api/book/util";

interface BookModalProps {
  data: Book;
  open: boolean;
  onClose: () => void;
}

export default function BookModal({ data, open, onClose }: BookModalProps) {
  return (
    <Modal open={open} onClose={onClose} sx={{ bgcolor: "background.paper" }}>
      <ModalOverflow>
        <ModalDialog sx={{ maxWidth: "50%" }}>
          <ModalClose />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            {data.title}
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            {data.description}
          </Typography>
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  );
}
