import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function BuddhismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Buddhism</h1>
        <p className="text-muted-foreground">Exploring Buddhist philosophy, teachings, and practices</p>
      </div>

      <Tabs defaultValue="teachings">
        <TabsList className="mb-6">
          <TabsTrigger value="teachings">Core Teachings</TabsTrigger>
          <TabsTrigger value="meditation">Meditation</TabsTrigger>
          <TabsTrigger value="texts">Sacred Texts</TabsTrigger>
          <TabsTrigger value="modern">Modern Applications</TabsTrigger>
        </TabsList>

        <TabsContent value="teachings" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>The Four Noble Truths</CardTitle>
                <CardDescription>The foundation of Buddhist philosophy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Four Noble Truths represent the core of Buddhist teachings, which Buddha himself discovered during
                  his enlightenment:
                </p>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>The truth of suffering (Dukkha)</li>
                  <li>The truth of the origin of suffering (Samudāya)</li>
                  <li>The truth of the cessation of suffering (Nirodha)</li>
                  <li>The truth of the path to the cessation of suffering (Magga)</li>
                </ol>
                <Button variant="outline" className="mt-4">
                  <Link href="/philosophy/buddhism/four-noble-truths">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Eightfold Path</CardTitle>
                <CardDescription>The Buddhist path to liberation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Noble Eightfold Path is the practical guideline to ethical and mental development with the goal of
                  freeing the individual from attachments and delusions:
                </p>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>Right Understanding</li>
                  <li>Right Thought</li>
                  <li>Right Speech</li>
                  <li>Right Action</li>
                  <li>Right Livelihood</li>
                  <li>Right Effort</li>
                  <li>Right Mindfulness</li>
                  <li>Right Concentration</li>
                </ol>
                <Button variant="outline" className="mt-4">
                  <Link href="/philosophy/buddhism/eightfold-path">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>The Three Marks of Existence</CardTitle>
              <CardDescription>Fundamental characteristics of all phenomena</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                In Buddhism, the three marks of existence are three characteristics shared by all sentient beings:
              </p>
              <ul className="ml-6 list-disc space-y-4">
                <li>
                  <strong>Impermanence (Anicca):</strong> All things are in a constant state of flux and nothing lasts
                  forever.
                </li>
                <li>
                  <strong>Suffering/Unsatisfactoriness (Dukkha):</strong> Life includes pain, getting what you don't
                  want and not getting what you want.
                </li>
                <li>
                  <strong>Non-self (Anatta):</strong> There is no unchanging, permanent self, soul, or essence in living
                  beings.
                </li>
              </ul>
              <Button variant="outline" className="mt-4">
                <Link href="/philosophy/buddhism/three-marks">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meditation" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Mindfulness Meditation</CardTitle>
                <CardDescription>Vipassana and awareness practices</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Mindfulness meditation involves paying attention to thoughts, feelings, and sensations in the present
                  moment with an attitude of openness and curiosity. This practice helps develop awareness and
                  acceptance of the present moment.
                </p>
                <div className="mt-4 aspect-video overflow-hidden rounded-md border">
                  <Image
                    src="/placeholder.svg?height=360&width=640"
                    alt="Mindfulness Meditation"
                    width={640}
                    height={360}
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Concentration Meditation</CardTitle>
                <CardDescription>Samatha and focused attention</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Concentration meditation involves focusing attention on a single object, such as the breath, a mantra,
                  or a visual object. This practice helps develop mental stability, calmness, and concentration.
                </p>
                <div className="mt-4 aspect-video overflow-hidden rounded-md border">
                  <Image
                    src="/placeholder.svg?height=360&width=640"
                    alt="Concentration Meditation"
                    width={640}
                    height={360}
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="texts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Buddhist Sacred Texts</CardTitle>
              <CardDescription>Ancient wisdom preserved in writing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Pali Canon (Tripitaka)</h3>
                  <p className="text-muted-foreground">
                    The earliest collection of Buddhist teachings, divided into three "baskets" (pitakas): Vinaya Pitaka
                    (monastic rules), Sutta Pitaka (discourses), and Abhidhamma Pitaka (philosophical analysis).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Mahayana Sutras</h3>
                  <p className="text-muted-foreground">
                    Texts of the Mahayana tradition, including the Heart Sutra, Diamond Sutra, and Lotus Sutra, which
                    emphasize compassion and the bodhisattva path.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Tibetan Book of the Dead</h3>
                  <p className="text-muted-foreground">
                    A guide for the deceased and dying, describing the experiences that the consciousness has after
                    death and how to attain liberation.
                  </p>
                </div>
              </div>
              <Button variant="outline" className="mt-4">
                <Link href="/philosophy/buddhism/texts">View All Texts</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="modern" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Buddhism in Modern Life</CardTitle>
              <CardDescription>Ancient wisdom for contemporary challenges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Mindfulness-Based Stress Reduction (MBSR)</h3>
                  <p className="text-muted-foreground">
                    A secular program developed by Jon Kabat-Zinn that adapts Buddhist mindfulness practices for stress
                    reduction and improved well-being.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Buddhism and Psychology</h3>
                  <p className="text-muted-foreground">
                    The integration of Buddhist concepts into modern psychology, including mindfulness-based cognitive
                    therapy and acceptance and commitment therapy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Engaged Buddhism</h3>
                  <p className="text-muted-foreground">
                    A movement that applies Buddhist principles to social, political, environmental, and economic
                    issues, advocating for peace, justice, and sustainability.
                  </p>
                </div>
              </div>
              <Button variant="outline" className="mt-4">
                <Link href="/philosophy/buddhism/modern">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

