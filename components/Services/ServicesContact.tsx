"use client";

import InquiryForm from "../InquiryForm";
import { serviceOptions } from "./servicesData";

export default function ServicesContact() {
  return <InquiryForm variant="services" options={serviceOptions} />;
}
