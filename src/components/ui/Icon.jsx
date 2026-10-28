import {
  PackageSearch,
  Handshake,
  Headset,
  MonitorSmartphone,
  ShieldCheck,
  FileBadge,
  ReceiptText,
  ClipboardCheck,
  Files,
  Phone,
  Mail,
  Route,
  Truck,
  Gauge,
  Users,
  FileCheck2,
  BadgeCheck,
} from "lucide-react";

const registry = {
  PackageSearch,
  Handshake,
  Headset,
  MonitorSmartphone,
  ShieldCheck,
  FileBadge,
  ReceiptText,
  ClipboardCheck,
  Files,
  Phone,
  Mail,
  Route,
  Truck,
  Gauge,
  Users,
  FileCheck2,
  BadgeCheck,
};

export default function Icon({ name, ...props }) {
  const Component = registry[name] || PackageSearch;
  return <Component aria-hidden="true" {...props} />;
}
