import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function ContactModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = { name: "", email: "", message: "" };

  //   name: ""

  const handleSubmit = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    setIsSubmitting(true);

    try {
      // Replace with your actual email sending logic (e.g., using a backend API)
      const response = await fetch(
        "https://us-central1-vite-react-portfolio-424404.cloudfunctions.net/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        onClose();
      } else {
        const errorData = await response.json(); // Try to get structured error data
        const errorMessage =
          errorData?.error ||
          errorData?.message ||
          "An unknown error occurred.";
        console.error("Error sending email:", response.status, errorMessage);
        // Display an error message to the user (e.g., using Chakra UI's Alert component)
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Display a generic error message to the user
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Link onClick={onOpen}>Contact Me</Link>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <Field name="name">
                  {({ field }: { field: any }) => (
                    <FormControl>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input {...field} id="name" placeholder="Your name" />
                    </FormControl>
                  )}
                </Field>
                <ErrorMessage name="name" />

                <Field name="email">
                  {({ field }: { field: any }) => (
                    <FormControl mt={4}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        placeholder="Your email"
                      />
                    </FormControl>
                  )}
                </Field>
                <ErrorMessage name="email" />

                <Field name="message">
                  {({ field }: { field: any }) => (
                    <FormControl mt={4}>
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <Textarea
                        {...field}
                        id="message"
                        placeholder="Your message"
                      />
                    </FormControl>
                  )}
                </Field>
                <ErrorMessage name="message" />

                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Send
                  </Button>
                  <Button variant="ghost" onClick={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Form>
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ContactModal;
