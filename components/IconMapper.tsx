import React from 'react';
import {
  Code,
  Server,
  ShieldCheck,
  Sparkles,
  Layers,
  Cpu,
  Bot,
  Layout,
  Smartphone,
  Terminal,
  Rocket
} from 'lucide-react';

interface IconMapperProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Code,
  Server,
  ShieldCheck,
  Sparkles,
  Layers,
  Cpu,
  Bot,
  Layout,
  Smartphone,
  Terminal,
  Rocket
};

const IconMapper: React.FC<IconMapperProps> = ({ name, className }) => {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    const DefaultIcon = Code;
    return <DefaultIcon className={className} />;
  }

  return <LucideIcon className={className} />;
};

export default IconMapper;
