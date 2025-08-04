import { Skeleton } from "@/components/ui/skeleton"

export function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:sticky lg:top-12 h-fit">
        {/* ROULETTE */}
        <div className="border rounded-lg p-6 h-72 flex flex-col items-center">
          {/* ICON */}
          <Skeleton className="size-32 rounded-full mb-4" />

          {/* TEXTS */}
          <Skeleton className="h-6 w-full mb-3" />
          <Skeleton className="h-4 w-full" />

          {/* BUTTON */}
          <Skeleton className="h-10 w-44 mt-4" />
        </div>

        {/* STATS */}
        <div className="flex gap-x-4 mt-4">
          <div className="border rounded-lg p-6 flex-1 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>

          <div className="border rounded-lg p-6 flex-1 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="border rounded-lg p-6 flex flex-col gap-4">
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
        </div>
      </div>
    </div>
  )
}
