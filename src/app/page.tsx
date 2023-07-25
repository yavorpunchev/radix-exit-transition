"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA, mauve, green } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button>Edit profile</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay />
      <TheDivInQuestion>
        <DialogContent>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&#x2019;re
            done.
          </DialogDescription>
          <Fieldset>
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@peduarte" />
          </Fieldset>
          <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
            <Dialog.Close asChild>
              <Button variant="green">Save changes</Button>
            </Dialog.Close>
          </Flex>
          <Dialog.Close asChild>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </TheDivInQuestion>
    </Dialog.Portal>
  </Dialog.Root>
);

const fakeAnimation = keyframes({
  from: { opacity: 1 },
  to: { opacity: 1 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const zoomIn = keyframes({
  from: { transform: "translate3d(-50%, 0, 0) scale(0.96)", opacity: 0 },
  to: { transform: "translate3d(-50%, -50%, 0)  scale(1)", opacity: 1 },
});

const zoomOut = keyframes({
  from: { transform: "translate3d(-50%, -50%, 0) scale(1)", opacity: 1 },
  to: { transform: "translate3d(-50%, 0, 0) scale(0.96)", opacity: 0 },
});

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,

  "&[data-state='open']": {
    animation: `${fadeIn} 400ms cubic-bezier(0.23, 1, 0.32, 1) forwards`,
  },
  "&[data-state='closed']": {
    animation: `${fadeOut} 400ms cubic-bezier(0.23, 1, 0.32, 1) forwards`,
  },
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate3d(0, 50%, 0) scale(0.96)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,

  "&[data-state='open']": {
    animation: `${zoomIn} 400ms cubic-bezier(0.23, 1, 0.32, 1) forwards`,
  },
  "&[data-state='closed']": {
    animation: `${zoomOut} 400ms cubic-bezier(0.23, 1, 0.32, 1) forwards`,
  },

  "&:focus": {
    outline: "none",
  },
});

const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17,
});

const DialogDescription = styled(Dialog.Description, {
  margin: "10px 0 20px",
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

// The div in question has to be Dialog.Overlay under the hood to be able to get
// the data attributes needed to control the animations
const TheDivInQuestion = styled(Dialog.Overlay, {
  // This prevents the the div in questin from being unmounted until after this animation has completed
  // The animation does nothing, but is necessary to allow the animations on the Modal Window to complete
  "&[data-state='closed']": {
    animation: `${fakeAnimation} 400ms cubic-bezier(0.23, 1, 0.32, 1) forwards`,
  },
});

// Non-modal components and styles
const Flex = styled("div", { display: "flex" });

const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        "&:hover": { backgroundColor: green.green5 },
        "&:focus": { boxShadow: `0 0 0 2px ${green.green7}` },
      },
    },
  },

  defaultVariants: {
    variant: "violet",
  },
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
  marginBottom: 15,
});

const Label = styled("label", {
  fontSize: 15,
  color: violet.violet11,
  width: 90,
  textAlign: "right",
});

const Input = styled("input", {
  all: "unset",
  width: "100%",
  flex: "1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,

  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

export default DialogDemo;
