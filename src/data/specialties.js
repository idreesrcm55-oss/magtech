/*
  SPECIALTIES
  ---------------------------------------------------------------
  Grid shown on /specialties. Add/remove objects freely.
  Icons: any name from https://lucide.dev (import it at the top).
*/
import {
  HeartPulse,
  Bone,
  Baby,
  Sparkles,
  Brain,
  Stethoscope,
  ScanLine,
  Ambulance,
  Activity,
  Pill,
  HeartHandshake,
  BrainCircuit,
  Eye,
  Ribbon,
  Users,
  Microscope,
} from "lucide-react";

export const SPECIALTIES = [
  { name: "Cardiology", icon: HeartPulse, text: "Complex cardiac procedure and diagnostic testing billing." },
  { name: "Orthopedics", icon: Bone, text: "Surgical, DME and post-op global period billing." },
  { name: "Pediatrics", icon: Baby, text: "Well-child visits, vaccines and Medicaid/CHIP claims." },
  { name: "Dermatology", icon: Sparkles, text: "Procedures, biopsies and cosmetic vs. medical billing." },
  { name: "Mental Health", icon: Brain, text: "Therapy, psychiatry and telehealth behavioral claims." },
  { name: "Internal Medicine", icon: Stethoscope, text: "E/M coding, chronic care and preventive services." },
  { name: "Radiology", icon: ScanLine, text: "Professional and technical component imaging claims." },
  { name: "Urgent Care", icon: Ambulance, text: "High-volume walk-in visits and fast turnaround." },
  { name: "Physical Therapy", icon: Activity, text: "Timed codes, therapy caps and plan-of-care tracking." },
  { name: "Gastroenterology", icon: Pill, text: "Endoscopy, colonoscopy and screening vs. diagnostic coding." },
  { name: "OB/GYN", icon: HeartHandshake, text: "Global maternity packages and women's health services." },
  { name: "Neurology", icon: BrainCircuit, text: "EEG, EMG and neurodiagnostic testing claims." },
  { name: "Ophthalmology", icon: Eye, text: "Vision vs. medical claims and surgical procedures." },
  { name: "Oncology", icon: Ribbon, text: "Chemotherapy, infusion and drug administration billing." },
  { name: "Family Medicine", icon: Users, text: "Primary care visits, preventive and chronic care." },
  { name: "Pathology & Labs", icon: Microscope, text: "Lab panels, pathology and diagnostic testing claims." },
];
