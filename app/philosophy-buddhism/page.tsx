import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, NotebookIcon as Lotus, ChevronRight } from "lucide-react"

export default function PhilosophyBuddhismPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10 space-y-8 pt-16 lg:pt-6">
      <div className="flex flex-col items-start space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Philosophy & Buddhism</h1>
        <p className="text-muted-foreground max-w-[700px]">
          Explore philosophical concepts and Buddhist teachings that provide frameworks for understanding the world and
          ourselves.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Philosophy
            </CardTitle>
            <CardDescription>Exploring philosophical concepts and ideas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Dive into the rich history of philosophical thought, from ancient wisdom to contemporary ideas. Explore
              concepts of ethics, metaphysics, epistemology, and more.
            </p>
            <div className="space-y-2">
              <div className="text-sm font-medium">Key Areas:</div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Western Philosophy</li>
                <li>Eastern Philosophy</li>
                <li>Ethics and Moral Philosophy</li>
                <li>Metaphysics and Ontology</li>
                <li>Epistemology</li>
                <li>Philosophy of Mind</li>
              </ul>
            </div>
            <Link href="/philosophy-buddhism/philosophy">
              <Button className="w-full" variant="outline">
                Explore Philosophy <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <Lotus className="mr-2 h-5 w-5" />
              Buddhism
            </CardTitle>
            <CardDescription>Buddhist teachings and practices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Explore the teachings of Buddhism, from the Four Noble Truths to meditation practices. Learn about
              different schools of Buddhist thought and their approaches to mindfulness and enlightenment.
            </p>
            <div className="space-y-2">
              <div className="text-sm font-medium">Key Areas:</div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Four Noble Truths</li>
                <li>Eightfold Path</li>
                <li>Meditation Practices</li>
                <li>Buddhist Ethics</li>
                <li>Schools of Buddhism</li>
                <li>Buddhist Psychology</li>
              </ul>
            </div>
            <Link href="/philosophy-buddhism/buddhism">
              <Button className="w-full" variant="outline">
                Explore Buddhism <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Featured Content</CardTitle>
          <CardDescription>Highlighted articles and resources on philosophy and Buddhism</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">The Nature of Consciousness</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                Exploring the philosophical and Buddhist perspectives on consciousness and the mind.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Ethics in a Modern World</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                How ancient philosophical and Buddhist ethical frameworks can guide us in contemporary challenges.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Meditation and Mind</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                The science and philosophy behind meditation practices and their effects on the mind.
              </p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

