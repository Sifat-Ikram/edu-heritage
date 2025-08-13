// components/undergraduate/FeaturedPrograms.tsx
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"

const featuredPrograms = [
  {
    id: "cs",
    title: "BSc Computer Science",
    description: "Develop skills in software, algorithms, and data science.",
    duration: "4 years",
    tuition: "$12,000/year",
  },
  {
    id: "business",
    title: "BBA Business Administration",
    description: "Prepare for a career in management, finance, and marketing.",
    duration: "4 years",
    tuition: "$10,000/year",
  },
  {
    id: "nursing",
    title: "BSc Nursing",
    description: "Train to become a professional nurse with clinical practice.",
    duration: "3 years",
    tuition: "$11,000/year",
  },
]

export default function FeaturedPrograms() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-3xl font-semibold text-[#008080] mb-8 text-center">Featured Programs</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPrograms.map(({ id, title, description, duration, tuition }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          >
            <Card className="h-full flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#006666]">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm text-gray-700">
                  <strong>Duration:</strong> {duration}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Tuition:</strong> {tuition}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Link
                  href={`/undergraduate/programs/${id}`}
                  className="text-[#008080] font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
