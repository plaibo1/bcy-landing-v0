"use client";

import { Button } from "../ui/button";

export const HeaderButton = () => {
  const scrollToConsultation = () => {
    // Находим элемент с id "consultation" и скроллим к нему
    const consultationSection = document.getElementById("consultation");
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      className="bg-primary hover:bg-primary-600"
      onClick={scrollToConsultation}
    >
      Консультация
    </Button>
  );
};
