import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={centered ? "text-center max-w-3xl mx-auto mb-16" : "mb-12"}
    >
      {subtitle && (
        <p className="text-accent-blue font-semibold text-sm uppercase tracking-wider mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
