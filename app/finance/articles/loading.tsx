import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero section skeleton */}
            <div className="bg-slate-900 py-16">
                <div className="container mx-auto px-4 text-center">
                    <Skeleton className="mx-auto h-10 w-64" />
                    <Skeleton className="mx-auto mt-4 h-6 w-96" />
                </div>
            </div>

            {/* Search and filters skeleton */}
            <div className="border-b bg-muted/40">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Skeleton className="h-10 w-full max-w-md" />
                        <div className="flex gap-2">
                            <Skeleton className="h-10 w-20" />
                            <Skeleton className="h-10 w-20" />
                            <Skeleton className="h-10 w-20" />
                            <Skeleton className="h-10 w-20" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured posts skeleton */}
            <section className="container mx-auto px-4 py-12">
                <Skeleton className="mb-8 h-8 w-48" />
                <div className="grid gap-8 md:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="overflow-hidden rounded-lg border bg-card shadow-sm">
                            <Skeleton className="h-48 w-full" />
                            <div className="p-5">
                                <Skeleton className="h-6 w-full" />
                                <Skeleton className="mt-2 h-4 w-full" />
                                <Skeleton className="mt-2 h-4 w-3/4" />
                                <div className="mt-4 flex items-center gap-2">
                                    <Skeleton className="h-8 w-8 rounded-full" />
                                    <Skeleton className="h-4 w-24" />
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <Skeleton className="h-3 w-20" />
                                    <Skeleton className="h-3 w-16" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Regular posts skeleton */}
            <section className="container mx-auto px-4 py-8">
                <Skeleton className="mb-8 h-8 w-48" />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="overflow-hidden rounded-lg border bg-card shadow-sm">
                            <Skeleton className="h-48 w-full" />
                            <div className="p-5">
                                <Skeleton className="h-6 w-full" />
                                <Skeleton className="mt-2 h-4 w-full" />
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <Skeleton className="h-5 w-16 rounded-full" />
                                    <Skeleton className="h-5 w-20 rounded-full" />
                                    <Skeleton className="h-5 w-14 rounded-full" />
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <Skeleton className="h-3 w-20" />
                                    <Skeleton className="h-3 w-16" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

