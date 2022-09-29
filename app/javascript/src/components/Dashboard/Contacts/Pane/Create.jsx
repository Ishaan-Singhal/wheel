import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { CONTACTS_INITIAL_VALUES } from "../constants";

const Create = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form
        contact={CONTACTS_INITIAL_VALUES}
        isEdit={false}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;