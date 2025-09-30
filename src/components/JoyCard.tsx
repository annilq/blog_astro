"use client";

import React from "react";
import { Card } from "@mui/joy";

interface JoyCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "plain" | "outlined" | "soft" | "solid";
}

export default function JoyCard({ children, className, variant = "soft" }: JoyCardProps) {
  return (
    <Card variant={variant} className={className}>
      {children}
    </Card>
  );
}
