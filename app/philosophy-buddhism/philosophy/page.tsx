import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function PhilosophyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Philosophy</h1>
        <p className="text-muted-foreground">Exploring philosophical traditions, concepts, and thinkers</p>
      </div>

      <Tabs defaultValue="western">
        <TabsList className="mb-6">
          <TabsTrigger value="western">Western Philosophy</TabsTrigger>
          <TabsTrigger value="eastern">Eastern Philosophy</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary Thought</TabsTrigger>
          <TabsTrigger value="ethics">Ethics & Morality</TabsTrigger>
        </TabsList>

        <TabsContent value="western" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Ancient Philosophy</CardTitle>
                <CardDescription>Greek and Roman traditions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Explore the foundational ideas of Western philosophy from thinkers such as Socrates, Plato, Aristotle,
                  and the Stoics.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/philosophy/philosophy/ancient">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modern Philosophy</CardTitle>
                <CardDescription>17th-19th century thought</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Discover the ideas that shaped the modern world from philosophers like Descartes, Kant, Hume, and
                  Nietzsche.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/philosophy/philosophy/modern">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Existentialism</CardTitle>
                <CardDescription>The philosophy of existence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Explore questions of human existence, freedom, and meaning through the works of Kierkegaard, Sartre,
                  Camus, and de Beauvoir.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/philosophy/philosophy/existentialism">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="eastern" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Confucianism</CardTitle>
                <CardDescription>Ethics, social philosophy, and virtue</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Confucianism emphasizes personal and governmental morality, correctness of social relationships,
                  justice, and sincerity. It was developed from the teachings of the Chinese philosopher Confucius.
                </p>
                <div className="mt-4 aspect-video overflow-hidden rounded-md border">
                  <Image
                    src="/placeholder.svg?height=360&width=640"
                    alt="Confucianism"
                    width={640}
                    height={360}
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Taoism</CardTitle>
                <CardDescription>Harmony, balance, and the natural way</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Taoism emphasizes living in harmony with the Tao (the source and drive of everything that exists). Key
                  concepts include wu wei (non-action), simplicity, and the balance of opposites.
                </p>
                <div className="mt-4 aspect-video overflow-hidden rounded-md border">
                  <Image
                    src="/placeholder.svg?height=360&width=640"
                    alt="Taoism"
                    width={640}
                    height={360}
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contemporary" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contemporary Philosophical Movements</CardTitle>
              <CardDescription>Modern approaches to philosophical inquiry</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Analytic Philosophy</h3>
                  <p className="text-muted-foreground">
                    A tradition that emphasizes clarity, precision, and logical analysis of concepts and language,
                    represented by thinkers like Russell, Wittgenstein, and Quine.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Continental Philosophy</h3>
                  <p className="text-muted-foreground">
                    A diverse tradition including phenomenology, existentialism, critical theory, and postmodernism,
                    with thinkers like Heidegger, Foucault, and Derrida.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Pragmatism</h3>
                  <p className="text-muted-foreground">
                    An American philosophical tradition that evaluates theories or beliefs in terms of their practical
                    application, developed by Peirce, James, and Dewey.
                  </p>
                </div>
              </div>
              <Button variant="outline" className="mt-4">
                <Link href="/philosophy/philosophy/contemporary">Explore More</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ethics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ethical Frameworks</CardTitle>
              <CardDescription>Approaches to moral reasoning and decision-making</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Virtue Ethics</h3>
                  <p className="text-muted-foreground">
                    Focuses on the development of character and virtues, emphasizing the role of virtue in living a good
                    life. Associated with Aristotle and contemporary philosophers like Alasdair MacIntyre.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Deontology</h3>
                  <p className="text-muted-foreground">
                    Emphasizes duties and rules, judging actions as right or wrong based on a set of rules rather than
                    consequences. Associated with Immanuel Kant's categorical imperative.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Consequentialism</h3>
                  <p className="text-muted-foreground">
                    Judges actions as right or wrong based on their consequences. Utilitarianism, developed by Jeremy
                    Bentham and John Stuart Mill, is a form of consequentialism that aims to maximize happiness or
                    well-being.
                  </p>
                </div>
              </div>
              <Button variant="outline" className="mt-4">
                <Link href="/philosophy/philosophy/ethics">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

