"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { PopupModal } from "react-calendly";
import { siteConfig } from "@/lib/site";

type CalendlyContextValue = {
  open: () => void;
  close: () => void;
};

const CalendlyContext = createContext<CalendlyContextValue | null>(null);

export function useCalendly() {
  const ctx = useContext(CalendlyContext);
  if (!ctx) {
    throw new Error("useCalendly must be used within <CalendlyProvider>");
  }
  return ctx;
}

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  // PopupModal needs a real DOM node; only available on the client.
  useEffect(() => {
    setRootEl(document.body);
  }, []);

  // Lock body scroll while the modal is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <CalendlyContext.Provider
      value={{ open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
      {rootEl && (
        <PopupModal
          url={siteConfig.calendlyUrl}
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
          rootElement={rootEl}
          pageSettings={{
            backgroundColor: "0c0b0a",
            primaryColor: "FF4300",
            textColor: "f0ede8",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
          }}
        />
      )}
    </CalendlyContext.Provider>
  );
}
