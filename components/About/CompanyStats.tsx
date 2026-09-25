import { Award, Building2, Network, Users } from "lucide-react";

const stats = [
  { value: "500+", label: "Projects Delivered", icon: Network, orange: false },
  { value: "50+", label: "Technology Experts", icon: Users, orange: true },
  { value: "10+", label: "Industries Served", icon: Building2, orange: false },
  { value: "99%", label: "Client Satisfaction", icon: Award, orange: true },
];

export default function CompanyStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className={`flex items-center justify-center gap-4 px-6 py-8 ${index > 0 ? "lg:border-l lg:border-technic-border" : ""} ${index % 2 === 1 ? "sm:border-l sm:border-technic-border" : ""}`}
          >
            <Icon className={`h-9 w-9 shrink-0 ${stat.orange ? "text-technic-orange" : "text-technic-cyan"}`} strokeWidth={1.75} />
            <div>
              <div className="font-heading text-3xl font-extrabold leading-none text-technic-text md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-technic-muted">{stat.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
